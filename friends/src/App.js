import React, { Component } from 'react';
import { Route } from 'react-router';
import FriendsView from './views/FriendsView';
import LoginView from './views/LoginView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginView}/>
        <Route path="/friends/" component={FriendsView}/>
      </div>
    );
  }
}

export default App;
