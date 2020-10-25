import React from "react";
import style from "./SeekerHealthCheck.module.css";
import Toolbar from "../components/Toolbar/index";
import {Link} from 'react-router-dom';
const SeekerHealthCheck = () => {
  return <div className={style.main}>
  <Link to='/feeder/request/1234/agreed'><div id={style.agreeBtnLink}></div></Link>
    <Toolbar links={null} />
  </div>;
};

export default SeekerHealthCheck;
