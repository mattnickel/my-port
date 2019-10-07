import React from 'react';
import hero from '../assets/fog.jpg';

export default class Home extends React.Component {
  render(){
    return (
      <section>
        <img src={hero} className="hero-img" alt="logo" />
        <p>
          "Matt Nickel says hello."
        </p>
      </section>
    );
  }
};

