import { GET_FRIENDS } from '../actions/action-constants.js';

export const friendsReducer = (state = [], actions) => {
  switch (actions.type) {
  case GET_FRIENDS:
    return actions.payload;
  default:
    return state;
  }
};
