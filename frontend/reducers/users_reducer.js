import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from '../actions/session_actions';

import { RECEIVE_REVIEW, RECEIVE_BUSINESS } from '../actions/business_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_REVIEW:
      return merge({}, state, { [action.author.id]: action.author });
    case RECEIVE_BUSINESS:
      return merge({}, state, action.authors);
    default:
      return state;
  }
};

export default usersReducer;
