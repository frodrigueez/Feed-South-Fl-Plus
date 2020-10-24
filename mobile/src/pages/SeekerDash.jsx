import React from "react";
import style from "./SeekerDash.module.css";
import seekerSignUp from "../assets/images/seekersignup.png";
import deliveryicon from "../assets/images/deleiveryiconorange.png";
import locatioMarker from "../assets/images/locationmarkgreen.png";
const SeekerDash = () => {
  return (
    <div className={`${style.main}`}>
      <div className="mt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <img src={seekerSignUp} alt="" className="" height="350px" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.welcome} text-center`}><b>Welcome,</b></div>
      <div className={`${style.welcomeMessage} text-center`}>
        We are here to help
      </div>
      <div className="pt-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <button className={`${style.distBt} btn btn-block p-2`}>
                <div className="container">
                  <div className="row">
                    <div className="col-1">
                      {" "}
                      <img
                        src={locatioMarker}
                        alt=""
                        style={{
                          filter: "grayscale(100%) invert(100%) brightness(2)",
                        }}
                      />{" "}
                    </div>
                    <div className="col-auto ml-auto pt-2 text-right pr-4">
                      Food Distrubution
                    </div>
                  </div>
                </div>
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
                <div className="container">
                  <div className="row">
                    <div className="col-1 p-0">
                      {" "}
                      <img
                        src={deliveryicon}
                        alt=""
                        style={{
                          filter: "grayscale(100%) invert(100%) brightness(2)",
                        }}
                      />{" "}
                    </div>
                    <div className="col-auto ml-auto pt-1 text-right pr-4">
                      Food Delivery
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeekerDash;
