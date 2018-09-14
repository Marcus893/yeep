import merge from 'lodash/merge';
import { RECEIVE_BUSINESS, RECEIVE_REVIEW } from '../actions/business_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESS:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      const { review } = action;
      return merge({}, state, { [review.id]: review });
    default:
      return state;
  }
}

export default reviewsReducer;
