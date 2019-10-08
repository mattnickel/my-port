import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export function getTwitterProfile(userId){
  let profile = {};

  return twitter.get()
    .then(response => {
      let user= response.data;
      profile.name=user.name;

    })
}
