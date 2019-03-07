import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getFriends } from '../../actions/action-creators.js';
import FriendCard from '../FriendCard/FriendCard';
import './FriendsList.css';

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render () {
    return (
      <section className="friends-list">
        {
          this.props.friends.length === 0 && <h2>Add a friend to your friends list below.</h2>
        }
        {
          this.props.friends.map((friend, index) =>
            <FriendCard
              key={ friend.id || index + 1 /* prevents duplicate key */ }
              name={friend.name}
              age={friend.age}
              email={friend.email}
              id={friend.id}
              deleteFriend={this.props.deleteFriendFunction}
              getCurrentFriend={this.props.getCurrentFriendFunction}
            />
          )
        }
      </section>
    );
  }
}

const mapStateToProps = (reducers) => {
  return {
    friends: reducers.friendsReducer.friends,
    fetchingFriends: reducers.friendsReducer.fetchingFriends,
    friendsFetched: reducers.friendsReducer.friendsFetched,
    error: reducers.friendsReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getFriends
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
