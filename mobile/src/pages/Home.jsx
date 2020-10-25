import style from "./Home.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Home = () => {
  return (
    <div className={style.main}>
      <img className={style.logo} alt="" src={logo} />
      <div className={style.item}>{/* creates space */}</div>
      <div className={`${style.item} ${style.welcomeSection}`}>
        <div className={style.item}>
          <span className={`${style.welcomeText}`}>Welcome,</span>
          <br />
          <span className={`${style.welcomeSubtext}`}>
            Please login to continue.
          </span>
        </div>
        <div className={style.item}>
          <Link to="/login" className="text-white">
            <button
              type="button"
              className={`btn ${style.button} ${style.loginButton}`}
            >
              Log In
            </button>
          </Link>
        </div>
        <div className={`${style.item} pt-3`}>
          <Link to="/usertype">
            <button
              type="button"
              className={`btn ${style.button} ${style.signinButton}`}
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
