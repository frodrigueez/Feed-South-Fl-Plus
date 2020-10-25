import React from "react";
import style from "./FeederDash.module.css";
import {Link} from 'react-router-dom';
const FeederDash = () => {
  return <div className={style.main}>
    <Link to="/feeder/requests"><div id={style.startBtnLink}></div></Link>
  </div>;
};

export default FeederDash;
