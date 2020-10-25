import style from './index.module.css';
import searchIcon from '../../assets/images/searchIcon.png';

const ZipCodeSearchBar = () => {
  return (
    <div className={`input-group mb-3 ${style.container}`}>
      <div>
        <img src={searchIcon} alt=""/>
      </div>
      <input type="text" className={`form-control ${style.invisibleInput}`} placeholder="address, zip or county" />
    </div>
  );  
}

export default ZipCodeSearchBar;