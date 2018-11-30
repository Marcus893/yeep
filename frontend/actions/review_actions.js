import * as APIUtil from "../util/review_api_util";

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";

export const receiveAllReviews = reviews => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews
  }
}

export const fetchAllReviews = () => {
  return dispatch => {
    return APIUtil.fetchAllReviews().then(reviews => {
      return dispatch(receiveAllReviews(reviews));
    });
  };
};
