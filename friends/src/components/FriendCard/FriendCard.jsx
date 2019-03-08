import React, {  Component } from 'react';
import { string, number } from 'prop-types';
import './FriendCard.css';

class FriendCard extends Component {

  onDeleteBtnClick = (id) => {
    this.props.deleteFriend(id);
  }

  onEditBtnClick = () => {
    const currentFriend = {
      name: this.props.name,
      age: this.props.age,
      email: this.props.email,
      id: this.props.id,
    }

    this.props.getCurrentFriend(currentFriend);
  }

  render () {
    return (
      <div className="card friend-card">
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.props.email}</p>
        <button
          className="edit-btn"
          onClick={() => console.log('haven\'t finished this yet')}
        >EDIT</button>
        <button
          className="delete-btn"
          onClick={() => console.log('haven\'t finished this yet')}
        >DELETE</button>
      </div>
    );
  }
}

FriendCard.propTypes = {
  name: string.isRequired,
  age: number.isRequired,
  email: string.isRequired
}

export default FriendCard;
