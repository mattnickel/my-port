import React from 'react';
import { slide as Menu } from 'react-burger-menu'

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div pageWrapId={ "page-wrap" } right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/resume">Resume</a>
        <a id="contact" className="menu-item" href="/portfolio">Portfolio</a>
        <a id="news" className="menu-item" href="/news" href="">News</a>
      </div>
    );
  }
}
export default Example;
