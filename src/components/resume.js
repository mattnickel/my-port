import React from 'react';
import Hex from '../assets/profile-hex.png';
import Resumepg1 from '../assets/resume1.png';
import Resumepg2 from '../assets/resume2.png';

export default class Resume extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="resume_bkgd">
          <img src={Resumepg1} className={["eight", "columns"].join(' ')} />
        </div>
        <div className="resume_bkgd">
          <img src={Resumepg2} className={["eight", "columns"].join(' ')} />
        </div>
      </div>
    );
  }
};

