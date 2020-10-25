import React from "react";
import style from "./SeekerRequest.module.css";
import Toolbar from "../components/Toolbar/index";
import { useState } from 'react';
import {Link} from 'react-router-dom';
const SeekerRequest_pickedUp = () => {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const links = {
    'file': '/feeder/profile',
  }
  
  return <div className={`${style.mainPickedUp}`}>
    <div id={style.goLink2} onClick={() => setShowConfirmPopup(true)}></div>
    {showConfirmPopup ? <>
      <div className={style.overlay}></div>
      <div id={style.confirmPopup2}></div>
      <Link to="/feeder/requests"><div id={style.confirmLink2}></div></Link>
      </>
      : ''}
    <Toolbar links={links} />
  </div>;
};


export default SeekerRequest_pickedUp;
