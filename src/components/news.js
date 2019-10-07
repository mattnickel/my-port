import React from 'react';
import * as userApi from '../../api/user-api';

export default class News extends React.Component {
  render(){

    return (
      <div className="container">
        <section className="hero-message">
          <h1 className="hero-message">
            News is here.
          </h1>

        </section>
        <section>

        </section>

      </div>
    );
  }
};
export function getNews(){
  console.log("Here")
};

