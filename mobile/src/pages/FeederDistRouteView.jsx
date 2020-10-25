import React from "react";
import style from "./FeederDistRouteView.module.css";
import mapBg from "../assets/images/map.png";
import scooter from "../assets/images/feedersignup.png";
import profile from "../assets/images/fileicon.png";
import location from "../assets/images/locationmarkgreen.png";
import delivery from "../assets/images/deleiveryiconorange.png";
import phone from "../assets/images/phoneOrange.png";
import locationarrow from "../assets/images/Locationarrow.png";
const FeederDeliveryRouteView = () => {
  return (
    <>
      <div className={`${style.main}`}>
        <div className={`${style.mapLayer}`}>
          <img src={mapBg} alt="" className="img-fluid" height="100%" />
        </div>
      </div>
      <div className={`${style.mapMenu} shadow`}>menu icon</div>
      <div className={`${style.gpsMenu} shadow`}>
        <img src={locationarrow} alt="" />
      </div>
      <div className={`${style.menu} shadow mx-auto px-4`}>
        {" "}
        <div className="container-fluid pt-3 pb-1">
          <div className="row">
            <div className="col-3 ml-auto text-center">
              <img src={profile} alt="" />
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
