import React from 'react';
import Header from './header';
import Burger from './burger';

export default class MainLayout extends React.Component {
  render(){
    return (
      <div className="background">
        <Burger />
        <Header />
        {this.props.children}
      </div>
    );
  }
};

