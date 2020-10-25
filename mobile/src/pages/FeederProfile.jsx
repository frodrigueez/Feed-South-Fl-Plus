import React from "react";
import style from "./FeederProfile.module.css";
import Toolbar from "../components/Toolbar/index";
import {Link} from 'react-router-dom';
const FeederProfile = () => {
  const links = {
    'delivery' : '/feeder/requests',
  }
  return <div className={style.main}>
    <Link to='/'><div className={style.logoutButton}></div></Link>
    <Toolbar links={links} />
  </div>;
};

export default FeederProfile;
