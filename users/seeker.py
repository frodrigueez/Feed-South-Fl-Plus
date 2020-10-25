from datetime import datetime 
from Common import datebase as datebase
from Common import calculations as calculations
import environment as env


class Seeker(user):
    def __init__(self, action, number_of_ppl, dietary_restrictions=None):
        super.__init__()
        # if action == "request delivery":
        #     self.user_info.update(number_of_ppl = number_of_ppl,
        #         dietary_restrictions = dietary_restrictions)
        # elif action == "find location":
        #     # TODO (pass for formatting)
        #     # nearby_centers = collect_nearby_centers(self, radius)
        #     pass

    def _update_delivery_address(self, address):
        self.user_info.update(preferred_address=address)

    def collect_nearby_centers(self, radius=10):
        nearby_centers = []

        if self.location_type == 'current_location':
            # COMES FROM FRONT END VIA CURRENT LOC 
            # Geocode for now 
            geocode_info = calculations.geocode_from_address(address=self.user_info.get('addresses')[0])
            feeder_lat = geocode_info.get('lat')
            feeder_lon = geocode_info.get('lon') 
            feeder_zip = geocode_info.get('zip')
#            feeder_zip = calculations.zip_from_latlon(
#                lat=feeder_lat,
#                lon=feeder_lon
#            )
        elif self.location_type == 'address':
            geocode_info = calculations.geocode_from_address(address=self.user_info.get('addresses')[0])
            feeder_lat = geocode_info.get('lat')
            feeder_lon = geocode_info.get('lon')
            feeder_zip = geocode_info.get('zip')
        else:
            # User input ZIPCODE
            feeder_zip = self.user_info.get('zipcode')
            filter = {'zip_code': feeder_zip}
            transactions = datebase.find_distribution_centers(filter)
            for doc in transactions:
                nearby_centers.append(doc)
        
        if self.location_type != 'zip':
            nearby_zips = calculations.get_nearby_zips(zip=feeder_zip)
            # Note check if list works in filter
            filter = {'zip_code': nearby_zips}
            distribution_centers = datebase.find_distribution_centers(filter)
            for doc in distribution_centers:
                
                # Check distance for rank
                geocode_data = calculations.geocode_from_address(address=doc.get('address'))
                distributor_lat = geocode_data.get('lat')
                distributor_lon = geocode_data.get('lon')

                dist = calculations.haversine(
                    lat1=feeder_lat,
                    lon1=feeder_lon,
                    lat2=distributor_lat,
                    lon2=distributor_lon
                )

                if dist <= radius:
                    doc.update(distance_from_request=dist)
                    nearby_centers.append(doc)

                return nearby_centers


    def push_requests(self, doc):
        # Generate dict for mongo insertion
        # Using input front end data
        doc = {}

        user_data = self.user_info
        doc.update(seeker=user_data.get('name'))
        doc.update(time_placed=datetime.utcnow())
        doc.update(delivery_address=user_data.get('addresses')[0])

                self.transaction_info = {
            'seeker': seeker,
            'feeder': feeder,
            'time_placed': time_placed,
            'delivery_address': delivery_address,
            'delivery_instructions': special_delivery_instructions,
            'is_tracked': is_tracked,
            'estimated_time': estimated_time
        }

                self.user_info = {
            'name': name,
            'user_type': user_type,
            'username': email,
            'password': password,
            'preferred_address': address, 
            'addresses': [address],  
            'phone': phone, 
            'email': email, # this will work as username and will not be updated
            'zipcode': zipcode,
            'profile_photo': profile_photo
         } 
        self.user_id = datebase.insert_user_info(self.user_info)
        self.user_filter = {'email': email} # TODO: someone check this
        self.user_full_name = name
        self.user_email = email
        self.location_type = 'address'

        # Find closest distribution centers to add to request record
        closest_distance = 1000
        closest_center = None
        nearby_centers = self.collect_nearby_centers(radius=10)
        for center in nearby_centers:
            distance = center.get('distance_from_request')
            if distance < closest_distance:
                closest_center = center
                closest_distance = distance
        
        doc.update(closest_distributor=closest_center)
        
        # Insert into transactions database
        datebase.insert_transaction_record(doc)


    def get_directions_to_distributor(self, distributor):
        distributor