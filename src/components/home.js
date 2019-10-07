import React from 'react';
import hero from '../assets/fog.jpg';

export default class Home extends React.Component {
  render(){
    return (
      <section className={["container", "hero-message"].join(' ')}>
        <h1 className="hero-message">
          Developer. Designer.
        </h1>
        <h1> Product Manager.</h1>
      </section>
    );
  }
};

