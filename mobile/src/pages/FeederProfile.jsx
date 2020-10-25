import React from "react";
import style from "./FeederProfile.module.css";
import Toolbar from "../components/Toolbar/index";
const FeederProfile = () => {
  const links = {
    'delivery' : '/feeder/requests',
  }
  return <div className={style.main}>
    <Toolbar links={links} />
  </div>;
};

export default FeederProfile;
