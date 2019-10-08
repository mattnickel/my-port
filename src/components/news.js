import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default class News extends React.Component {
  render(){
    return (
      <div className="container">
        <section className={["six", "columns"].join(' ')}>
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

