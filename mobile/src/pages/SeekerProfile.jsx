import React from "react";
import style from "./SeekerProfile.module.css";
import Toolbar from "../components/Toolbar/index";
const SeekerProfile = () => {
  const links = {
    'location': '/map',
    'delivery': '/seeker/confirmation'
  }
  return <div className={style.main}>
    <Toolbar links={links} />
  </div>;
};

export default SeekerProfile;
