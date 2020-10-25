import pymongo
from Common import Common 
import environment as env 
from Common import datebase as datebase
import seeker
import feeder

class User:
    def __init__(self, name, user_type, password, address, phone, email, zipcode, profile_photo=env.default_profile_pic.get('photo')):        
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
        self.user_filter = {'email': email} 
        self.user_full_name = name
        self.user_email = email
        self.location_type = 'address'

    # Getter methods     
    def __get_item___(self):
        return self.user_info()

    def _get_user_full_name(self):
        return self.user_full_name

    def _get_user_user_type(self):
        return self.user_info.get('user_type')
        
    def _get_user_username(self):
        return self.user_email

    def _get_user_address(self):
        return self.user_info.get('preferred_address')
    
    def _get_user_phone(self):
        return self.user_info.get('phone')

    def _get_user_profile_photo(self):
        return self.user_info.get('profile_photo')
    
    def _add_address(self, address, set_preferred=False):
        result = datebase.find_one_user(filter=self.user_filter)
        update = {'addresses': result.get('addresses').append()}
        datebase.update_user_info(update=update, filter=self.user_filter)

        self.user_info.get('addresses').append(address)
        if set_preferred:
            update = {'preferred_address': address}
            datebase.update_user_info(update=update, filter=self.user_filter)
            self.preferred_address = address

    def _update_user_type(self, user_type):
        update = {'user_type': user_type}
        # update db record
        datebase.update_user_info(update=update, filter=self.user_filter)
        # update object 
        self.user_info.update('user_update'=user_update) 

    def _update_user_profile_photo(self, profile_photo):
      update = {'profile_photo': profile_photo}
      # update db record
      datebase.update_user_info(update=update, filter=self.user_filter)
      # update object 
      self.user_info.update('profile_photo'=profile_photo) 


# Any user methods? 