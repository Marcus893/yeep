import merge from 'lodash/merge';
import { RECEIVE_BUSINESS, RECEIVE_REVIEW } from '../actions/business_actions';
import { RECEIVE_ALL_REVIEWS } from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESS:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      const { review } = action;
      return merge({}, state, { [review.id]: review });
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
}

export default reviewsReducer;
