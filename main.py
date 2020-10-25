import functools

import Common as common 
import environment as env
from users import user, seeker, feeder 

from flask import Flask, redirect, url_for


app = Flask(__main__)

@app.route('/request')
def request():
  # TODO
  raise NotImplementedError

@app.route('/seeker', methods=('POST'), user)
# HIGH PRIORITY
def show_distribution_centers():
    # GET DATA for radius
    # CALL DISPLAY (seeker method)
    nearby_centers = user.collect_nearby_centers(radius=10)

    return '''
    <!doctype html>
    <title>Test RUN</title>
    <h1>I hope this works</h1>
    '''
    

def submit_request():
    number_of_people = request.form.get('')
    dietary_restriction = request.form.get('')

    doc = {}
    
    # TODO: health check ?????   
    user.push_requests(doc)

    return redirect(url_for("request"))
    # page 10 adobe xd

#def update_address():


@app.route('/feeder', methods=('POST'), user)
# LOW PRIORITY

@app.route('/') # the path to get to this fcn
def home():
    """Pick seeker or feeder signup"""
    return redirect(url_for("user", user_type))
    
def register_user("/register", methods=('GET', 'POST')) #user_type):
    if request.method == 'POST':
        required = ['name', 'email', 'phone', 'password', 'address']
        name = request.form['Full Name']
        email = request.form['Email address']
        phone = request.form['Phone number']
        password = request.form['Password'] 
        preferred_address = request.form['Address 1'] + request.form['Address 2'] + request.form['City'] + request.form['State'] + request.form['Zipcode']
      
        if not any in required: 
            error = "Missing field."  
        else:
            if user_type == 'seeker':
                user = seeker.Seeker(name=name, user_type=, password=password, address=address, phone=phone, email=email)
            elif user_type == 'feeder':
                user = feeder.Feeder(name=name, user_type=, password=password, address=address, phone=phone, email=email)
            user_doc = user.__get_item__() # returns item dict
            # insert in mongo
            user_id = common.Datebase.insert_user_info(user_doc)
    return redirect(url_for('auth.register.html')) 

@app.route('/login', methods=("GET", "POST") )
def login():
    """Log in a registered user"""
    if request_method == 'POST':
        username = request.form['email']
        password = request.form['password']
        error = None
        result = common.Database.find_one_user(filter={'username': username, 'password': password})

        if result.get('user_type') == 'feeder':
            user = feeder.Feeder(
                name=result.get('name'),
                user_type=result.get('user_type'), 
                password=None, 
                address=None, 
                phone=result.get('phone'), 
                email=result.get('email'), 
                zipcode=result.get('zipcode')
            )
            
        elif result.get('user_type') == 'seeker':
            user = seeker.Seeker(
                name=result.get('name'), 
                user_type=result.get('user_type'),
                password=None, 
                address=result.get('preferred_address'),
                phone=result.get('phone'),
                email=result.get('email'), 
                zipcode=result.get('zipcode'),
            )

        return redirect(url_for(result.get('user_type')), user)


if __name__ == '__main__':
    app.run(debug=True)
    # Users need to be created 

    user = user.User(name)

