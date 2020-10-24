import React from "react";
import style from "./FeederDeliveryRouteView.module.css";
import mapBg from "../assets/images/map.png";
const FeederDeliveryRouteView = () => {
  return (
    <div className={`${style.main}`}>
      <div className={`${style.mapLayer}`}>
        <img src={mapBg} alt="" />
      </div>
      <div className={`${style.menuTop}`}>test</div>
      <div className={`${style.menuBottom}`}>testt</div>
    </div>
  );
};

export default FeederDeliveryRouteView;
