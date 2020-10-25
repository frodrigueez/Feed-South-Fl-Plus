__version__ = '1.0.0' 

from twilio.rest import Client 

# For sms support
twilio_number = "+14155926697"
twilio_client = Client('AC83294b31b007ec3d56ed91c9b5f0f8b3', '6b84938b662f8232747da76b44525619')

default_profile_photo = { 
    'photo': 'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg'
}

text_updates = {
    'order_recieved': "Your order has been recieved and is being prepared.",
    'on_the_way': "Your order is on the way. Estimated arrival time: {}",
    'delivered': "Your order has been delivered.",
    'delayed': "Your order has been delayed. Estimated arrival time: {}"
}
delivery_status = text_updates.keys() 