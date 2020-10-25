import React from "react";
import style from "./SeekerRequest.module.css";
import Toolbar from "../components/Toolbar/index";
import {Link} from 'react-router-dom';
import {useState} from 'react';

const SeekerRequest = () => {
  const actions = {
    VIEWING_REQUEST: 'VIEWING_REQUEST',
    READING_HEALTHCHECK: 'READING_HEALTHCHECK',
    PICKING_UP: 'PICKING_UP',
    DROPPING_OFF: 'DROPPING_OFF',
  }
  const [action, setAction] = useState(actions.VIEWING_REQUEST);
  const [showPickupConfirmation, setShowPickupConfirmation] = useState(false);
  const [showDropoffConfirmation, setShowDropoffConfirmation] = useState(false);

  const links = {
    'file': '/feeder/profile',
  }
  
  return (
  <div className={`${style.main} ${style[action]}`}>
    {action === actions.VIEWING_REQUEST ? <div id={style.claimLink} onClick={() => setAction(actions.READING_HEALTHCHECK)}></div> : ''}
    {action === actions.READING_HEALTHCHECK ? <div id={style.agreeBtnLink} onClick={() => setAction(actions.PICKING_UP)}></div> : ''}
    {action === actions.PICKING_UP ? <div id={style.goLink} onClick={() => setShowPickupConfirmation(true)}></div> : ''}
    {action === actions.DROPPING_OFF ? <div id={style.goLink2} onClick={() => setShowDropoffConfirmation(true)}></div> : ''}

    {showPickupConfirmation ? <>
        <div className={style.overlay}></div>
        <div id={style.confirmPopup}></div>
        <div id={style.confirmLink} onClick={() => {setAction(actions.DROPPING_OFF); setShowPickupConfirmation(false);}}></div>
      </>
    : ''}
    {showDropoffConfirmation ? <>
        <div className={style.overlay}></div>
        <div id={style.confirmPopup2}></div>
        <Link to="/feeder/requests"><div id={style.confirmLink2}></div></Link>
      </>
    : ''}
    
    <Toolbar links={links} />
  </div>);
};


export default SeekerRequest;
