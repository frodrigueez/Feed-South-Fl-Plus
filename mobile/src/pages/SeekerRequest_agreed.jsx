import React from "react";
import style from "./SeekerRequest.module.css";
import Toolbar from "../components/Toolbar/index";
import { useState } from 'react';
import {Link} from 'react-router-dom';
const SeekerRequest_agreed = () => {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const links = {
    'file': '/feeder/profile',
  }
  
  return <div className={`${style.mainAgreed}`}>
    <div id={style.goLink} onClick={() => setShowConfirmPopup(true)}></div>
    {showConfirmPopup ? <>
      <div className={style.overlay}></div>
      <div id={style.confirmPopup}></div>
      <Link to="/feeder/request/1234/pickedUp"><div id={style.confirmLink}></div></Link>
      </>
      : ''}
    <Toolbar links={links} />
  </div>;
};


export default SeekerRequest_agreed;
