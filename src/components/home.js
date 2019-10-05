import React from 'react';

import hero from '../fog.jpg';

export default class Home extends React.Component {
  render(){
    return (
      <main>
        <section>
          <div className="App">
            <header className="header">
              <nav className="Topnav">
                <ul className="Topnav-list">
                  <li className= "Topnav-list-item">Home</li>
                  <li className= "Topnav-list-item">Resume</li>
                  <li className= "Topnav-list-item">Portfolio</li>
                  <li className= "Topnav-list-item">News</li>
                </ul>
              </nav>
              <img src={hero} className="hero-img" alt="logo" />
              <p>
                "Matt Nickel knows what's up."
              </p>
            </header>
          </div>
        </section>
      </main>
    );
  }
};

