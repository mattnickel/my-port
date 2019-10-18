import React from 'react';
import Mailto from 'react-protected-mailto';
import Hex from '../assets/profile-hex.png';


export default class Home extends React.Component {
  render(){
    return (

      <div className="container">

        <section className="hero-message">
          <h1 className="hero-message">
            Developer. Designer.
          </h1>
          <h1> UX Researcher.</h1>

        </section>
        <section>
          <img src={Hex} className={["three", "columns"].join(' ')} />

          <p className={["seven", "columns", "about-message"].join(' ')}>
            I'm creative, enjoy people, and thrive on getting things done. I have a passion to build the right things - the things your user really wants. This involves empathetic listening to actual users, stakeholders, and developers.</p>
          <p className={["seven", "columns", "about-message"].join(' ')}> I want to work with a team to <b>create products </b>that delight the users. From user research and wireframes to design prototypes and software development... I have done it all. I have a proven ability to <b>connect with customers </b> and develop strategic <b>technological solutions</b> to real-word problems. </p>
          <p className={["seven", "columns", "about-message"].join(' ')}>I have had the opportunity to make an impact in a variety of roles including software developer, product manager, sales trainer, product marketing manager and most recently as product evangelist. Played a key role in scaling an early startup to $27M in revenue, 300+ employees, and 100M users.  </p>
          <p className={["offset-by-three", "column", "about-message"].join(' ')}>
            <a target="_top" href="mailto:2nickels@gmail.com?subject=Just saw your portfolio online" className="underline">Click here to send me an email.</a>
          </p>
        </section>

      </div>

    )
  }
}




