import React from 'react';
//import { Link } from 'react-router';

export default class MainLayout extends React.Component {
  render(){
    return (
      <div className="app">
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
};

