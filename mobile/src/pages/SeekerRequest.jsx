import React from "react";
import style from "./SeekerRequest.module.css";
import Toolbar from "../components/Toolbar/index";
import {Link} from 'react-router-dom';
const SeekerRequest = () => {
  const links = {
    'file': '/feeder/profile',
  }
  
  return (<div className={`${style.main}`}>
    <Link to="/seeker/healthcheck"><div id={style.claimLink}></div></Link>
    <Toolbar links={links} />
  </div>);
};


export default SeekerRequest;
