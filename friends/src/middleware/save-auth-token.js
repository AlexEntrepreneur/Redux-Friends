import { LOGIN_SUCCESS } from '../actions/action-constants';

const saveAuthToken = store => next => action => {
    if (action.type === LOGIN_SUCCESS) {
      localStorage.setItem('userToken', action.payload);
    }
    next(action);
  };

export default saveAuthToken
