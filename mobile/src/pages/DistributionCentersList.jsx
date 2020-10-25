import style from './DistributionCentersList.module.css';
import Toolbar from '../components/Toolbar/index';

const DistributionCentersList = () => {
  const sampleDistCenters = [{
      name: '12th Street COG Prophecy',
      distance: '0.8mi',
      address: '601 SE 12th Street, Belle Glade, FL 334330',
      phone: '561-317-0000',
      email: 'angelharvest@gmail.com'
    },
    {
      name: '12th Street COG Prophecy2',
      distance: '0.8mi',
      address: '601 SE 12th Street, Belle Glade, FL 334330',
      phone: '561-317-0000',
      email: 'angelharvest@gmail.com'
    },
    {
      name: '12th Street COG Prophecy3',
      distance: '0.8mi',
      address: '601 SE 12th Street, Belle Glade, FL 334330',
      phone: '561-317-0000',
      email: 'angelharvest@gmail.com'
    },
    {
      name: '12th Street COG Prophecy4',
      distance: '0.8mi',
      address: '601 SE 12th Street, Belle Glade, FL 334330',
      phone: '561-317-0000',
      email: 'angelharvest@gmail.com'
    },
    {
      name: '12th Street COG Prophecy3',
      distance: '0.8mi',
      address: '601 SE 12th Street, Belle Glade, FL 334330',
      phone: '561-317-0000',
      email: 'angelharvest@gmail.com'
    },
    {
      name: '12th Street COG Prophecy4',
      distance: '0.8mi',
      address: '601 SE 12th Street, Belle Glade, FL 334330',
      phone: '561-317-0000',
      email: 'angelharvest@gmail.com'
    },
    {
      name: '12th Street COG Prophecy3',
      distance: '0.8mi',
      address: '601 SE 12th Street, Belle Glade, FL 334330',
      phone: '561-317-0000',
      email: 'angelharvest@gmail.com'
    },
    {
      name: '12th Street COG Prophecy4',
      distance: '0.8mi',
      address: '601 SE 12th Street, Belle Glade, FL 334330',
      phone: '561-317-0000',
      email: 'angelharvest@gmail.com'
    },
  ];


  const DistCenterList = sampleDistCenters.map((distCenter) => {
      return (
      <div key={distCenter.name} className={`container ${style.distCenterListItem}`}>
        <div className="row">
          <div className={`col ${style.distCenterName}`}>{distCenter.name}</div>
        </div>
        <div className="row">
          <div className={`col-2`}><div className={style.addressIcon}></div></div>
          <div className={`col-10 ${style.info}`}>{distCenter.address}</div>
        </div>
        <div className="row">
          <div className={`col-2`}><div className={style.phoneIcon}></div></div>
          <div className={`col-10 ${style.info}`} >{distCenter.phone}</div>
        </div>
        <div className="row">
          <div className={`col-2`}><div className={style.emailIcon}></div></div>
          <div className={`col-10 ${style.info}`}>{distCenter.email}</div>
        </div>
        <div className="row">
          <div className={`col-10`}><div className={style.distance}>{distCenter.distance}</div></div>
          <div className={`col-2`}><button className={style.button}>Go</button></div>
        </div>
    </div>);
  });

  return (
    <div className={style.main}>
      <div className={style.fixedHeader}>
        <div className={style.title}>Food Distributions</div>
      </div>
      <div className={style.distCenterList}>
        {DistCenterList}
      </div>
      <div className={style.floatingNav}>
        <div className={style.mapIcon}></div>
        <div className={style.printIcon}></div>
      </div>
      <Toolbar />
    </div>
  );

};

export default DistributionCentersList;