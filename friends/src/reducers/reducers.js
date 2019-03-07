import * as types from '../actions/action-constants.js';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}

export const friendsReducer = (state = initialState, action) => {
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
    default:
      return state;
}
};
