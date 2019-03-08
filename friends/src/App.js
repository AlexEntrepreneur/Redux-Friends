import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import FriendsView from './views/FriendsView';
import LoginView from './views/LoginView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={(pr) => <LoginView {...pr} />} />
        <Route path="/friends/" render={() =>
            (
              localStorage.getItem('userToken')
              ? <FriendsView />
              : <Redirect to="/" />
            )
          }/>
      </div>
    );
  }
}

export default App;
