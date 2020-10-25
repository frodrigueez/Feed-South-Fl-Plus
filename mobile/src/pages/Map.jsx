import style from './Map.module.css';
import ZipCodeSearchBar from '../components/ZipCodeSearchBar/index';
import DistributionCenterDetails from '../components/DistributionCenterDetails/index';
import Toolbar from '../components/Toolbar/index';
import { useState } from 'react';

const Map = () => {
  const sampleDistCenter = {
    name: '12th Street COG Prophecy',
    distance: '0.8mi',
    address: '601 SE 12th Street, Belle Glade, FL 334330',
    phone: '561-317-0000',
    email: 'angelharvest@gmail.com'
  };
  const [distCenter, setDistCenter] = useState(null);
  const [destination, setDestination] = useState(false);
  
  const toggleDistCenter = () => {
    if(distCenter){
      setDistCenter(null);
    } else { 
      setDistCenter(sampleDistCenter);
    }
  }
  const links = {
    'file': '/seeker/profile',
    'delivery': '/seeker/dist/route',
  }

  return (
    <div className={`${style.container} ${destination ? style.hasDestination : ''}}`} >
      <div onClick={toggleDistCenter} className={style.distCenterTrigger}></div>
      <div className={`${style.item} pt-3`}>
        <ZipCodeSearchBar />
      </div>
      { distCenter ? <DistributionCenterDetails distCenter={distCenter} takeMeThere={() => {setDestination(true); setDistCenter(null);}} /> : ''}

      <Toolbar links={links} />
    </div>
  );

};

export default Map;