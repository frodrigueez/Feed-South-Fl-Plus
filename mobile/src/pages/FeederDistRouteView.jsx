import React from "react";
import style from "./FeederDistRouteView.module.css";
import mapBg from "../assets/images/map.png";
import profile from "../assets/images/fileicon.png";
import location from "../assets/images/locationmarkgreen.png";
import delivery from "../assets/images/deleiveryiconorange.png";
import listviewIcon from "../assets/images/listviewIcon.png";
import locationarrow from "../assets/images/Locationarrow.png";
import {Link} from 'react-router-dom';
const FeederDeliveryRouteView = () => {
  return (
    <>
      <div className={`${style.main}`}>
        <div className={`${style.mapLayer}`}>
          <img src={mapBg} alt="" className="img-fluid" height="100%" />
        </div>
      </div>
      <div className={`${style.mapMenu}`}>
        {" "}
        <img src={listviewIcon} alt="" />
      </div>
      <div className={`${style.gpsMenu} pt-2 pl-2`}>
        <img src={locationarrow} alt="" className="img-fluid" />{" "}
      </div>
      <div className={`${style.search}`}>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto mt-5">
              <input type="text" className="form-control" placeholder='Zip code'/>
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

export default FeederDeliveryRouteView;
