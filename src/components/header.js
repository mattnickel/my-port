import React from 'react';
import Logo from '../assets/mattlogow.png';
import Burger from './burger';


export default class Header extends React.Component {
  render(){
    return (
      <header className="header">
          <img className="Topnav-logo" src={Logo} />
      </header>

    );
  }
}

