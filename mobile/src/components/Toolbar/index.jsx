import style from './index.module.css';
import fileIcon from '../../assets/images/fileicon.png';
import greenLocationMarkIcon from '../../assets/images/locationmarkgreen.png';
import deliveryIcon from '../../assets/images/deleiveryiconorange.png';
import { Link } from 'react-router-dom';

const Toolbar = (props) => {
  let {links} = props;
  if(!links) links = {};
  return (
    <div className={style.container}>
      <div className="d-flex justify-content-around d-flex align-items-center">
          <div className={style.icon}>
            {links.file ? <Link to={links.file}><img src={fileIcon} alt="File"/></Link>
              : <img src={fileIcon} alt="File"/>
            }
          </div>
          <div className={style.icon}>
            {links.location ? <Link to={links.location}><img src={greenLocationMarkIcon} alt="Map"/></Link>
              : <img src={greenLocationMarkIcon} alt="Map"/>
            }
          </div>
          <div className={style.icon}>
            {links.delivery ? <Link to={links.delivery}><img src={deliveryIcon} alt="Delivery"/></Link>
              : <img src={deliveryIcon} alt="Delivery"/>
            }
          </div> 
        </div>
    </div>
  );  
}

export default Toolbar;