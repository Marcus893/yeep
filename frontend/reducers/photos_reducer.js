import { RECEIVE_BUSINESS } from '../actions/business_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BUSINESS:
      return action.photos;
    default:
      return state;
  }
};

export default photosReducer;
