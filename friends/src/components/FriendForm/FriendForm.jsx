import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addFriend } from '../../actions/action-creators.js';
import './FriendForm.css';

class FriendForm extends React.Component {
  friendNameInput = React.createRef();
  friendAgeInput = React.createRef();
  friendEmailInput = React.createRef();

  componentDidMount() {

  }

  onFormKeyDown = (event) => {
    event.persist();
    if (event.key === 'Enter') {
      this.onFriendFormSubmit(event);
    }
  }

  onFriendFormSubmit = (event) => {
    event.preventDefault();
    const name = this.friendNameInput.current.value;
    const age = this.friendAgeInput.current.value;
    const email = this.friendEmailInput.current.value;
    const formIsFilled = name !== '' && age !== '' && email !== '';

    if (formIsFilled) {
      this.props.addFriend(name, Number(age), email);
      this.clearFriendForm();
    }
  }

  clearFriendForm = () => {
    this.friendNameInput.current.value = '';
    this.friendAgeInput.current.value = '';
    this.friendEmailInput.current.value = '';
    this.friendNameInput.current.focus();
  }

  render () {
    return (
      <div className="friend-form-container">
        {
          this.props.formError && <p className="danger-text">{'please try again'}</p>
        }
        <form
          onSubmit={this.onFriendFormSubmit}
          onKeyDown={this.onFormKeyDown}
          className="friend-form"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            ref={this.friendNameInput}
          />
          <input
            type="number"
            name="age"
            placeholder="age"
            ref={this.friendAgeInput}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            ref={this.friendEmailInput}
          />
          <div>
            <button type="submit">{this.props.id ? 'confirm' : 'Add Friend'}</button>
            {
              this.props.id &&
              <button
                className="cancel-btn"
                onClick={this.props.clearFriendForm}
              >
                cancel
              </button>
            }
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addFriend
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(FriendForm);
