import React from "react";
import style from "./FoodDeliveryRequest.module.css";
import scooter from "../assets/images/feedersignup.png";
import profile from "../assets/images/fileicon.png";
import location from "../assets/images/locationmarkgreen.png";
import delivery from "../assets/images/deleiveryiconorange.png";
import {Link} from 'react-router-dom';
const FoodDeliveryRequest = () => {
  return (
    <>
      <div className={`${style.main}`}>
        <div className="mt-5 pt-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <img src={scooter} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.section1}`}>We are here to help</div>
        <div>
          Please answer the following questions In order to process your request
        </div>
        <div>How many people in your household?</div>
        <div>
          <select className="form-control">
            <option value="1">1</option>
          </select>
        </div>
        <div>Is there any diet restriction?</div>
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 p-0 pr-2">
                {" "}
                <button className={`${style.button} p-2 btn btn-block text-left pl-4 text-white`}>
                  Yes
                </button>{" "}
              </div>
              <div className="col-6 p-0 pl-2">
                {" "}
                <button className={`${style.buttonNo} p-2 btn btn-block text-left pl-4 text-dark`}>
                  No
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
        <div style={{color:'#D6D6D6'}}>If yes please describe:</div>
        <div style={{color:'#D6D6D6'}}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            className="form-control"
          ></textarea>
        </div>
      </div>
      <div className={`${style.secondary} pt-4`}>
        <div>
          In an effort to keep our members and volunteers Safe, we’re asking all
          seekers to agree to the Following terms each time the request
          delivery.
          <ul>
            <li>I will follow CDC guidelines and local regulations</li>
            <li>
              I will wear a face covering where required by Applicable law or
              retailer policy.
            </li>
          </ul>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-6 p-0">
                <button className={`${style.buttonNo} btn btn-block p-2`}>
                  Agree
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='text-capitalize' style={{color:'#D6D6D6',fontWeight:'700', fontSize:'1.25em'}}>delivery instructions</div>
        <div style={{color:'#D6D6D6'}}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            className="form-control"
          ></textarea>
        </div>
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className={`col-10 mx-auto`}>
                <Link to="/seeker/route">
                  <button className={`${style.button} btn btn-block p-3 text-white`}>Request</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.menu} shadow mx-auto px-4`}>
        {" "}
        <div className="container-fluid pt-3 pb-1">
          <div className="row">
            <div className="col-3 ml-auto text-center">
              <Link to="/seeker/profile"><img src={profile} alt="" /></Link>
            </div>
            <div className="col-3 text-center">
              <img src={location} alt="" />
            </div>
            <div className="col-3 pt-2 mr-auto text-center">
              <img src={delivery} alt="" />
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default FoodDeliveryRequest;
