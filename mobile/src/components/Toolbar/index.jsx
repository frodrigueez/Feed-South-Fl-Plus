import style from './index.module.css';
import fileIcon from '../../assets/images/fileicon.png';
import greenLocationMarkIcon from '../../assets/images/locationmarkgreen.png';
import deliveryIcon from '../../assets/images/deleiveryiconorange.png';

const Toolbar = () => {
  return (
    <div className={style.container}>
      <div className="d-flex justify-content-around d-flex align-items-center">
          <div className={style.icon}>
            <img src={fileIcon} alt="File"/>
          </div>
          <div className={style.icon}>
            <img src={greenLocationMarkIcon} alt="Map"/>
          </div>
          <div className={style.icon}>
            <img src={deliveryIcon} alt="Delivery"/>
          </div> 
        </div>
    </div>
  );  
}

export default Toolbar;