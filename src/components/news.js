import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default class News extends React.Component {
  render(){
    return (
      <div className="container flex-container">
        <section className={["eight", "columns"].join(' ')}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="mattnickel"
            options={{height: 800}}
          />
        </section>

      </div>
    );
  }
};
export function getNews(){
  console.log("Here")
};

