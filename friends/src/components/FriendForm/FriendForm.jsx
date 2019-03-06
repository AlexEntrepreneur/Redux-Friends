import React from 'react';
import './FriendForm.css';

class FriendForm extends React.Component {
  onFormKeyDown = (event) => {
    event.persist();
    if (event.key === 'Enter') {
      this.props.onFriendFormSubmit(event);
    }
  }

  render () {
    return (
      <div className="friend-form-container">
        {
          this.props.formError && <p className="danger-text">{'please try again'}</p>
        }
        <form
          onSubmit={this.props.onFriendFormSubmit}
          onKeyDown={this.onFormKeyDown}
          className="friend-form"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            type="number"
            name="age"
            placeholder="age"
          />
          <input
            type="email"
            name="email"
            placeholder="email"
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

export default FriendForm;
