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
  const [distCenter, setDistCenter] = useState(sampleDistCenter);

  

  const toggleDistCenter = () => {
    if(distCenter){
      setDistCenter(null);
    } else { 
      setDistCenter(sampleDistCenter);
    }
  }

  return (
    <div className={style.container} onClick={toggleDistCenter}>
      <div className={`${style.item} pt-3`}>
        <ZipCodeSearchBar />
      </div>
      { distCenter ? <DistributionCenterDetails distCenter={distCenter} /> : ''}

      <Toolbar/>
    </div>
  );

};

export default Map;