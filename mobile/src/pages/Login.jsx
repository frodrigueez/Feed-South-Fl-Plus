import React from "react";
import style from "./Login.module.css";
import welcomeImg from "../assets/images/welcomeback.png";
import gPlus from "../assets/images/googleIcon.png";
import facebook from "../assets/images/FacebookIcon.png";
import {Link} from 'react-router-dom';
const Login = () => {
  return (
    <div className={`${style.main}`}>
      <div className={`${style.item} ${style.iconSize} pt-5`}>
        {" "}
        <img src={welcomeImg} alt="" />{" "}
      </div>
      <div className={`${style.item}`}>
        <input
          type="text"
          placeholder="Your email"
          className={`${style.input} form-control`}
        />
      </div>
      <div className={`${style.item}`}>
        <input
          type="password"
          placeholder="********"
          className={`${style.input} form-control`}
        />
      </div>
      <div className={`${style.item} ${style.rememberSection}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-1">
              <input
                type="checkbox"
                className={`${style.rememberCB} p-0 pl-1`}
              />
            </div>
            <div className="col-5 p-0 pl-2">Remember me</div>
            <div className={` col-5 p-0 text-right`}>
              <a href="#" className={`${style.linkColor}`}>Forget password?</a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.item}`}>
        <Link to='/seeker/dashboard'>
          <button
            className={`${style.button} btn-block text-capitalize p-2 text-white`}
          >
            Log in{" "}
          </button>
        </Link>
      </div>
      <div className={`${style.item} text-center`}>Or sign it with</div>
      <div className={`${style.item}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 p-0 pr-2 text-right">
              <img src={gPlus} alt="" />
            </div>
            <div className="col-6 p-0 pl-2 ">
              <img src={facebook} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.item} text-center`}>
        New user?{" "}
        <a href="#" className={`${style.linkColor}`}>
          Sign Up
        </a>{" "}
      </div>
    </div>
  );
};

export default Login;
