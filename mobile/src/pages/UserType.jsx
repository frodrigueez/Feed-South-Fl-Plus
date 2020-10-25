import style from './UserType.module.css';
import seekerImg from '../assets/images/seekersignup.png';
import feederImg from '../assets/images/feedersignup.png';

const LandingPage = () => {
  return (
    <div className={style.main}>

      <div className={`${style.item} pt-5`}>
        <img alt="Seeker Sign Up" src={seekerImg}></img>
      </div>
      <div className={`${style.item}`}>
        <button type="button" className={`btn ${style.button} ${style.seekerButton}`}>SEEKER</button>
      </div>
      <div className={`${style.item} pt-5`}>
        <img alt="Feeder Sign Up" src={feederImg}></img>
      </div>
      <div className={`${style.item}`}>
        <button type="button" className={`btn ${style.button} ${style.feederButton}`}>FEEDER</button>
      </div>
      <div className={`${style.quote}`}>
        “Alone, we can do so little; together, we can do so much”<br/>– Helen Keller
      </div>
    </div>
  );
};

export default LandingPage;