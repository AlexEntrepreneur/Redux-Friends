import * as types from '../actions/action-constants.js';

const initialLoginState = {
  error: null
};

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
  case types.LOGIN_FAILURE:
    return {
      token: null,
      error: action.payload
    };
  default:
    return state;
  }
};

const initialFriendsState = {
  fetchingFriends: false,
  friendsFetched: false,
  addingFriend: false,
  friendAdded: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}

export const friendsReducer = (state = initialFriendsState, action) => {
  switch (action.type) {
    case types.FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: true
      };
    case types.FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: true,
        friends: action.payload
      };
    case types.FETCHING_FRIENDS_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: false,
        error: action.payload
      };
    case types.ADDING_FRIEND:
      return {
        ...state,
        friendsFetched: false,
        addingFriend: true
      };
    case types.ADDING_FRIEND_SUCCESS:
      return {
        ...state,
        addingFriend: false,
        friendAdded: true,
        friends: action.payload
      };
    case types.ADDING_FRIEND_FAILURE:
      return {
        ...state,
        addingFriend: false,
        friendAdded: false,
        error: action.payload
      };
    default:
      return state;
}
};
