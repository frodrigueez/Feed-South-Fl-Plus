import React from "react";
import style from "./SeekerRequests.module.css";
import Toolbar from "../components/Toolbar/index";
import {Link} from 'react-router-dom';
const SeekerRequests = () => {
  const links = {
    'file': '/feeder/profile',
  }
  return <div className={style.main}>
    <Link to={{
        pathname: '/feeder/request/1234',
        agreedToHealthCheck: false,
      }}>
      <div id={style.detailsLink}></div>
    </Link>
    <Link to={{
        pathname: '/feeder/request/1234',
        agreedToHealthCheck: false,
      }}>
        <div id={style.claimLink}></div>
    </Link>
    <Toolbar links={links} />
  </div>;
};

export default SeekerRequests;
