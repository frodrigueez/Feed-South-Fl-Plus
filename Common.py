from pymongo import MongoClient
from math import sin, cos, sqrt, atan2, radians
from pyzipcode import ZipCodeDatabase
import googlemaps

class datebase:
    client = MongoClient('localhost', 27017)
    db = client.feeding_south_fl
  
    collections = {
      'users': 'users',
      'distribution_centers': 'distribution_centers',
      'transactions': 'transactions'
    }
    
    # Transactions 
    def find_transactions(filter):
        return db.transactions.find(filter)
  
    def find_one_transaction(filter):
        return db.transactions.find_one(filter)

    def insert_transaction_record(doc):
        db.transactions.insert_one(doc)

    def delete_transaction_record(filter):
        db.transactions.delete_one(filter)
    
    def update_transaction_record(filter, update):
        db.transactions.update_one(filter, update, upsert=True)

    # Users
    def insert_user_info(doc):
        db.users.insert_one(doc)
      
    def update_user_info(filter, update):
       db.users.update_one(filter, update, upsert=True)

    def find_one_user(filter):
        return db.users.find_one(filter)

    # Distribution centers
    def find_distribution_centers(filter):
        return db.distribution_centers.find(filter)


class calculations:
  api_key = 'AIzaSyDTP5ftW9e5IS8wOscGYY19QDrrJxw9ViI'
  gmaps = googlemaps.Client(key = api_key)

  def haversine(lat1, lon1, lat2, lon2):
    R = 3958.8
    lat1 = radians(lat1)
    lat2 = radians(lat2)
    lon1 = radians(lon1)
    lon2 = radians(lon2)

    dlon = lon2 - lon1
    dlat = lat2 - lat1 

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1-a))

    return c*R 


def geocode_from_address(address):
  geocode_info = calculations.gmaps.geocode(address=address)

  geometry = geocode_info[0].get('geometry')
  latlon_combo = geometry.get('location')
  lat = latlon_combo.get('lat')
  lon = latlon_combo.get('lon')

  zip_index = None
  index = 0
  address_details = geocode_info[0].get('address_components')
  for component in address_details:
    types = component.get('types')
    if 'postal_code' in types:
      zip_index = index
    index += 1

  zip_code = address_details[zip_index].get('short_name')

  return {
      'lat': lat,
      'lon': lon,
      'zip': zip_code
  }


def get_nearby_zips(zip):
  nearby_zips = []
  zipdb = ZipCodeDatabase()
  
  returned_zips = zipdb.get_zipcodes_around_radius(str(zip), 5)
  for returned_zip in returned_zips:
    nearby_zips.append(str(returned_zip.zip))

  return nearby_zips


