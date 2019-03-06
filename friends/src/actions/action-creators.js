import { GET_FRIENDS } from './action-constants.js';

export const getFriends = (friends) => {
  return {
    type: GET_FRIENDS,
    payload: [
      {
        "id": 1,
        "name": "Ben",
        "age": 30,
        "email": "ben@lambdaschool.com"
      },
      {
        "id": 2,
        "name": "Austen",
        "age": 45,
        "email": "austen@lambdaschool.com"
      }
    ]
  };
}
