import React, { useState } from "react";
import style from "./FeederDeliveryRouteView.module.css";
import mapBg from "../assets/images/map.png";
// import scooter from "../assets/images/feedersignup.png";
import profile from "../assets/images/fileicon.png";
import location from "../assets/images/locationmarkgreen.png";
import delivery from "../assets/images/deleiveryiconorange.png";
import phone from "../assets/images/phoneOrange.png";
import card from "../assets/images/card.png";
import { Link } from "react-router-dom";
const FeederDeliveryRouteView = () => {
  const [arrivalTime] = useState(true);
  return (
    <>
      <div className={`${style.main}`}>
        <div className={`${style.mapLayer}`}>
          <img src={mapBg} alt="" className="img-fluid" height="100%" />
        </div>
        <div className={`${style.menuTop} px-5 pt-5`}>
          <div className="container-fluid">
            <div
              className="row"
              style={arrivalTime ? { display: "inherit" } : { display: "none" }}
            >
              <div
                className="col-12 p-0"
                style={{ color: "#436026", fontWeight: "600" }}
              >
                Arriving in 10 minutes
              </div>
              <div className={`${style.status} col-12 px-2 py-3 mb-5 mt-3`}>
                <div className="row px-3">
                  <div className="col-4 p-0">
                    <input type="checkbox" name="" id="" checked /> Picked
                  </div>
                  <div className="col-4 p-0">
                    <input type="checkbox" name="" id="" checked /> In transit
                  </div>
                  <div className="col-4 p-0">
                    <input type="checkbox" name="" id="" /> Delivered
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 p-0 text-center">
                <img src={profile} alt="" className="shadow" />
              </div>
              <div
                className="col-8 text-center"
                style={{ color: "#8D8D8D", fontSize: "1.25em" }}
              >
                Simon Matthews
              </div>
              <div className="col-2 p-0 text-center">
                <img src={phone} alt="" height="39px" />
              </div>
            </div>
            <div className="row">
              <div className={`${style.card} col-12 mt-5 p-2 border`}>
                <img src={card} alt="" className="img-fluid" />
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
              <Link to="/seeker/profile">
                <img src={profile} alt="" />
              </Link>
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

export default FeederDeliveryRouteView;
