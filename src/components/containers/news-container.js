import React from 'react';
import twitterApi from '../api/twitter_api';

const NewsContainer = React.createClass({
  getInitialState: function(){
    return {
      name: null,
      twitter_name: null,
      twitter_imageUrl: null,
      twitter_posts:[]
    }
  },
  componentDidMount: function(){
    twitterApi.getTwitterProfile().then(profile => {
      name: profile.name,
      twitter_name: profile.twitter_name,
      twitter_imageUrl: profile.twitter_imageUrl,
      twitter_posts:[]
    })
  }
})
