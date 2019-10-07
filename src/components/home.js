import React from 'react';
import hero from '../assets/fog.jpg';

export default class Home extends React.Component {
  render(){
    return (
      <div className="container">
        <section className="hero-message">
          <h1 className="hero-message">
            Developer. Designer.
          </h1>
          <h1> Product Manager.</h1>
        </section>
        <section className="about-message">
          <h1 className="">
            About
          </h1>
          <p> Product Manager.</p>
        </section>
      </div>
    );
  }
};

