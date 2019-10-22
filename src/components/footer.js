import React from 'react';


export default class Header extends React.Component {
  render(){
    return (
      <footer className={["footer", "flex-container"].join(' ')}>
          <p>This is a footer</p>
      </footer>
    );
  }
}
