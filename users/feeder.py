import json

from Common import datebase as datebase
from Common import calculations as calculations


class Feeder(user):
    def __init__(self, delivery_method):
        super.__init__()
        self.user_info.update(delivery_method=delivery_method) 
        # self.location
        # #self.Transaction = None # How to assign transaction?

     
    #def _update_feeders_transaction(self, transaction_id):
    #    filter = {'transaction_id': transaction_id}
    #    self.Transaction = datebase.find_one_transaction(filter=filter)

    def _get_requests(self, radius=10):
        """
          Return all requests in the area w/in radius
        """
        valid_locations = []

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
            transactions = datebase.find_transactions(filter)
            for doc in transactions:
                valid_locations.append(doc)

        if self.location_type != 'zip': 
            nearby_zips = calculations.get_nearby_zips(zip=feeder_zip)
            # Note check if list works in filter
            filter = {'zip_code': nearby_zips}

            transactions = datebase.find_transactions(filter)

            for doc in transactions:
                location_lat = doc.get('lat')
                location_lon = doc.get('lon')

                dist = calculations.haversine(
                    lat1=feeder_lat,
                    lon1=feeder_lon,
                    lat2=location_lat,
                    lon2=location_lon
                )

                if dist <= radius:
                  valid_locations.append(doc)

        return valid_locations


    def get_directions(self,):
      """
      Display the route to the closest distribution center
      """
  