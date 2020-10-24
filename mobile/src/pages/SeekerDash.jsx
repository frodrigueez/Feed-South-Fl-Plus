import React from "react";
import style from "./SeekerDash.module.css";
import seekerSignUp from "../assets/images/seekersignup.png";
const SeekerDash = () => {
  return (
    <div className={`${style.main}`}>
      <div className="mt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <img src={seekerSignUp} alt="" className="" height='350px' />
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.welcome} text-center`}>Welcome,</div>
      <div className={`${style.welcomeMessage} text-center`}>
        We are here to help
      </div>
      <div className="pt-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <button className={`${style.distBt} btn btn-block p-3`}>
                Food Distrubution
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-4 mb-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <button className={`${style.deleveryBt} btn btn-block p-3`}>
                Food Delivery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeekerDash;
