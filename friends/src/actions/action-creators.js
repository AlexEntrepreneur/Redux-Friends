import axios from 'axios';
import * as action from './action-constants.js';
const APIUrl = 'http://localhost:5000/api';
axios.defaults.headers.common['Authorization'] = 'eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ';

const request = (url, method, successCallback, failCallback, payload) => {
  switch (method) {
  case 'GET':
    axios.get(url)
      .then(res => {
        successCallback(res.data);
      })
      .catch(err => {
        failCallback(err);
      })
    break;
  case 'POST':
    axios.post(url, payload)
      .then(res => {
        successCallback(res.data);
      })
      .catch(err => {
        failCallback(err);
      })
    break;
  default:
    console.error(`Request to ${url} failed. Please check your config.`);
  }
};

export const getFriends = () => (dispatch) => {
  dispatch(fetchingFriends());
  request(
    `${APIUrl}/friends`,
    'GET',
    (data) => dispatch(onFetchFriendsSuccess(data)),
    (err) => dispatch(onFetchFriendsFailure(err.message))
  );
};

export const addFriend = (name, age, email) => (dispatch) => {
  dispatch(addingFriend());
  request(
    `${APIUrl}/friends`,
    'POST',
    (data) => dispatch(onAddFriendSuccess(data)),
    (err) => dispatch(onAddFriendFailure(err.message)),
    { name, age, email }
  );
};

const onFetchFriendsSuccess = (friends) => {
  return {
    type: action.FETCHING_FRIENDS_SUCCESS,
    payload: friends
  };
};

const onFetchFriendsFailure = (error) => {
  return {
    type: action.FETCHING_FRIENDS_FAILURE,
    payload: error
  };
};

const fetchingFriends = () => {
  return {
    type: action.FETCHING_FRIENDS
  };
};

const addingFriend = () => {
  return {
    type: action.ADDING_FRIEND
  };
};

const onAddFriendSuccess = (friends) => {
  return {
    type: action.ADDING_FRIEND_SUCCESS,
    payload: friends
  };
};


const onAddFriendFailure = (error) => {
  return {
    type: action.ADDING_FRIEND_FAILURE,
    payload: error
  };
};
