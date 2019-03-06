import React, { Component } from 'react';
import FriendForm from './components/FriendForm/FriendForm';
import FriendsList from './components/FriendsList/FriendsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
        <FriendForm />
      </div>
    );
  }
}

export default App;
