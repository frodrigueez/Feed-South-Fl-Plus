import style from './index.module.css';
import addressIcon from '../../assets/images/LocationOrange.png';
import phoneIcon from '../../assets/images/phoneOrange.png';
import emailIcon from '../../assets/images/emailOrange.png';

const DistributionCenterDetails = (props) => {
  const {distCenter} = props;
  return (
    <div className={style.container}>
      <div className={style.distCenterName}>{distCenter.name}</div>
      <div className={style.distanceText}>{distCenter.distance}</div>

      <table className={style.detailsTable}>
        <tbody>
          <tr>
            <td><img src={addressIcon} alt="" /></td>
            <td>{distCenter.address}</td>
          </tr>
          <tr>
            <td><img src={phoneIcon} alt="" /></td>
            <td>{distCenter.phone}</td>
          </tr>
          <tr>
            <td><img src={emailIcon} alt="" /></td>
            <td>{distCenter.email}</td>
          </tr>
        </tbody>
      </table>
      <button className={style.takeMeHereButton} onClick={props.takeMeThere}>Take Me There</button>
    </div>
  );  
}

export default DistributionCenterDetails;