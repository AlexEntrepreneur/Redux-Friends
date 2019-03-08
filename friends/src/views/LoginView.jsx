import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../actions/action-creators.js';

class LoginView extends Component {
  onLoginFormSubmit = (event) => {
    event.persist();
    event.preventDefault();
    const username = event.target['username'].value;
    const password = event.target['password'].value;
    this.props.login(username, password);
  }

  render () {
    return (
      <>
      <form onSubmit={this.onLoginFormSubmit}>
        <input
          type="text"
          name="username"
          value="Lambda School"
          onChange={() => {}}
        />
        <input
          type="password"
          name="password"
          value="i<3Lambd4"
          onChange={() => {}}
        />
        <button>Login</button>
      </form>
      </>
    );
  }
}

const mapStateToProps = (reducers) => {
  return {
    loginError: reducers.loginReducer.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
