import React from 'react';
import FB from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import Linkedin from '../assets/linkedin.png';
import Email from '../assets/email.png';



export default class Header extends React.Component {
  render(){
    return (
      <footer className={["footer"].join(' ')}>

        <div className= "flex-container">
          <a href="https://www.facebook.com/matt.nickel.961">
            <img className="social" src={FB} />
          </a>
          <a href="https://twitter.com/mattnickel">
            <img className="social" src={Twitter} />
          </a>
           <a href="https://www.linkedin.com/in/mattnickel/">
            <img className="social" src={Linkedin} />
          </a>
          <a target="_top" href="mailto:2nickels@gmail.com?subject=Just saw your portfolio online" className="underline"><img className="social" src={Email} />
          </a>
        </div>
        <p> &copy; 2019 Matt Nickel Creative Studio, Seattle, WA </p>
      </footer>
    );
  }
}
