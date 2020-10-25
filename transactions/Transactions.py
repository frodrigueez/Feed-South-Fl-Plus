import datetime

from Common import datebase as datebase

class Transaction:

    def __init__(self, seeker, feeder, time_placed, delivery_address, special_delivery_instructions=None, is_tracked=True, estimated_time=None):
        self.transaction_info = {
            'seeker': seeker,
            'feeder': feeder,
            'time_placed': time_placed,
            'delivery_address': delivery_address,
            'delivery_instructions': special_delivery_instructions,
            'is_tracked': is_tracked,
            'estimated_time': estimated_time
        }
        # Insert record to transactions collection
        self.transaction_id = datebase.insert_transaction_record(self.transaction_info)
        self.transaction_info.update('transaction_id'=self.transaction_id)
        self.transaction_filter = {'transaction_id': self.transaction_id} 
        self.transaction_seeker = seeker
        self.transaction_feeder = feeder 

    def _update_estimated_time(self, estimated_time):
        # Update db record 
        update = {'estimated_time': estimated_time}
        datebase.update_transaction_record(filter=self.transaction_filter, update=update)

        # Update object
        self.transaction_info.update(estimated_time=estimated_time)

    def _get_delivery_instructions(self):
          raise NotImplementedError()

    def  _update_time_delivered(self, time_delivered):
        """
        Update record's time_delivered field, estimated_time, and delivery status
        """
        # Update db record's time_delivered field
        update = {'time_delivered': time_delivered}
        datebase.update_transaction_record(filter=self.transaction_filter, update=update)
        
        # Update db record's estimated_time field
        datebase.update_transaction_record(filter=self.transaction_filter, {estimated_time:'0'})
        
        # Update db record's transaction status to delivered
        self._update_transaction_status(transaction_status='delivered')
   		self.transaction_info.update(delivery_status='delivered')
        
        # Update object
   		self.transaction_info.update(time_delivered=time_delivered)
        self.transaction_info.update(estimated_time=0)
        self.transaction_info(transaction_status='delivered')

   	def _update_transaction_status(self, transaction_status, photo=None):
        """
        Update record's transaction_status and send sms msg to update seeker
        """
        # Send text message when status changes 
        self.send_text(message_type=transaction_status)

        # Update db record's transaction status
        update = {'transaction_status': transaction_status}
        datebase.update_transaction_record(filter=self.transaction_filter, update=update)

        # Update object
        self.transaction_info.update('transaction_seeker': transaction_status)

        # If delivered ... TODO: do we actually want to remove from db? 
   		# if transaction_status == 'delivered':
        #    datebase.delete_transaction_record()
        #    return 1 
        # arguments against: we wont be able to access delivered photo if we want to do that

    def _add_delivery_photo(self, delivery_photo):
        # Update db record w delivery_photo
        update = {'delivery_photo': delivery_photo}
        datebase.update_transaction_record(filter=self.transaction_filter, update=update)

        # Update object
    	self.transaction_info.update(delivery_photo=delivery_photo)
    
    def _get_estimated_time(self):
        return transaction_info.get('estimated_time') 

    @staticmethod
    def send_text(self, message_type, photo=None):
        seeker_number = self.transaction_seeker._get_user_phone()
        if message_type in env.text_updates:
            twilio_client.messages.create(to="+1{}".format(seeker_number),
                from=env.twilio_number,
                message=env.text_updates.get(message_type))
