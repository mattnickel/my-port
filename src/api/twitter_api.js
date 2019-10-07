import React from 'react';

export function getTwitterProfile(userId){
  let profile = {};

  return twitter.get()
    .then(response => {
      let user= response.data;
      profile.name=user.name;

    })
}
