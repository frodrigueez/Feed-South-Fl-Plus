import React from "react";
import style from "./Signup.module.css";
const Signup = () => {
  return (
    <div className={`${style.main}`}>
      <div className={`${style.item}`}>
        <h2 className="text-capitalize text-center py-5">
          <b className={`${style.headerColor}`}>sign up</b>
        </h2>
      </div>
      <div className={`${style.item}`}>
        <input
          type="text"
          className={`${style.input} form-control p-3`}
          placeholder="Full Name"
        />
      </div>
      <div className={`${style.item}`}>
        <input
          type="email"
          className={`${style.input} form-control p-3`}
          placeholder="Email Address"
        />
      </div>
      <div className={`${style.item}`}>
        <input
          type="Number"
          className={`${style.input} form-control p-3`}
          placeholder="Phone Number"
        />
      </div>
      <div className={`${style.item}`}>
        <input
          type="password"
          className={`${style.input} form-control p-3`}
          placeholder="********"
        />
      </div>
      <div className={`${style.item}`}>
        <input
          type="text"
          className={`${style.input} form-control p-3`}
          placeholder="Address 1"
        />
      </div>
      <div className={`${style.item}`}>
        <input
          type="text"
          className={`${style.input} form-control p-3`}
          placeholder="Address 2"
        />
      </div>
      <div className={`${style.item}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 p-0 pr-1">
              <select className="form-control">
                <option value="test" selected>
                  Country
                </option>
                <option value="test">USA</option>
              </select>
            </div>
            <div className="col-6 p-0 pl-1">
              <select className="form-control">
                <option value="state">State</option>
                <option value="FL">FL</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.item}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 p-0 pr-1">
              <select className="form-control">
                <option value="test" selected>
                  City
                </option>
                <option value="test">USA</option>
              </select>
            </div>
            <div className="col-6 p-0 pl-1">
              <input
                type="number"
                className={`${style.input} form-control`}
                placeholder="Zip"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.item}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 p-0 mx-auto">
              <button
                className={`${style.signUpButton} btn btn-block p-3 my-5 my-4`}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
