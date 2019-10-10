import React from 'react';
//import { Link } from 'react-router';

export default class MainLayout extends React.Component {
  render(){
    return (
      <div className="main-layout">
          {this.props.children}
      </div>
    );
  }
};

