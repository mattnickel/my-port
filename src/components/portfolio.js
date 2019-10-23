import React from 'react';
import App4 from '../assets/app4.png';
import Dashboard from '../assets/dashboard2.png';
import Warehouse from '../assets/warehouse2.png';
import Mobile from '../assets/mobileFirst.png';
import Email from '../assets/email.jpg';
import OTK from '../assets/otk.png';
import MOD from '../assets/mod2.png';
import Bot from '../assets/snapbot.png';
import Devices from '../assets/devices.jpg';
import Lander from '../assets/lander2.png';

export default class Portfolio extends React.Component {
  render(){
    return (
      <div className="container flex-container">
        <div className={["three", "columns", "port-square"].join(' ')}>
          <img src={Lander} className={["twelve", "columns"].join(' ')} />
          <p className={["twelve", "columns", "port-square-title"].join(' ')} >Dynamic Landing Page</p>
        </div>
        <div className={["three", "columns", "port-square"].join(' ')}>
          <img src={Devices} className={["twelve", "columns"].join(' ')} />
          <p className={["twelve", "columns", "port-square-title"].join(' ')} >Responsive Web Design</p>
        </div>
        <div className={["three", "columns", "port-square"].join(' ')}>
          <img src={Dashboard} className={["twelve", "columns"].join(' ')} />
          <p className={["twelve", "columns", "port-square-title"].join(' ')} >Sales Dashboard</p>
        </div>
        <div className={["three", "columns", "port-square"].join(' ')}>
        <img src={Warehouse} className={["twelve", "columns"].join(' ')} />
          <p className={["twelve", "columns", "port-square-title"].join(' ')} >Warehouse Inventory</p>
        </div>
        <div className={["three", "columns", "port-square"].join(' ')}>
          <img src={App4} className={["twelve", "columns"].join(' ')} />
          <p className={["twelve", "columns", "port-square-title"].join(' ')} >Mobile App</p>
        </div>

        <div className={["three", "columns", "port-square"].join(' ')}>
          <img src={Email} className={["twelve", "columns"].join(' ')} />
          <p className={["twelve", "columns", "port-square-title"].join(' ')} >Email Design</p>
        </div>
        <div className={["three", "columns", "port-square"].join(' ')}>
          <img src={OTK} className={["twelve", "columns"].join(' ')} />
          <p className={["twelve", "columns", "port-square-title"].join(' ')} >Instructional Design</p>
        </div>
        <div className={["three", "columns", "port-square"].join(' ')}>
          <img src={MOD} className={["twelve", "columns"].join(' ')} />
          <p className={["twelve", "columns", "port-square-title"].join(' ')} >Flowcharts</p>
        </div>
        <div className={["three", "columns", "port-square"].join(' ')}>
          <img src={Bot} className={["twelve", "columns"].join(' ')} />
          <p className={["twelve", "columns", "port-square-title"].join(' ')} >SnapBot</p>
        </div>
      </div>
    );
  }
};

