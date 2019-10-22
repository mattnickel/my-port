import React from 'react';
import Header from './header';
import Menu from './burger';
import Footer from './footer';

export default class MainLayout extends React.Component {
  render(){
    return (
      <div id="outer-container" className="background">

        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }  />
        <main id="page-wrap" className="background-img">
          <Header />
          {this.props.children}
          <Footer />
        </main>
      </div>
    );
  }
};

