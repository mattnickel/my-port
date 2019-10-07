import React from 'react';

export default class Header extends React.Component {
  render(){
    return (
      <header className="header">
        <nav className="Topnav">
          <ul className="Topnav-list">
            <li className= "Topnav-list-item">Home</li>
            <li className= "Topnav-list-item">Resume</li>
            <li className= "Topnav-list-item">Portfolio</li>
            <li className= "Topnav-list-item">News</li>
          </ul>
        </nav>
      </header>
    )
  }
}
