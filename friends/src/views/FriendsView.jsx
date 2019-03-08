import React, { Component } from 'react';
import FriendForm from '.././components/FriendForm/FriendForm';
import FriendsList from '.././components/FriendsList/FriendsList';

class FriendsView extends Component {
  render () {
    return (
      <>
        <FriendsList />
        <FriendForm />
      </>
    );
  }
}

export default FriendsView;
