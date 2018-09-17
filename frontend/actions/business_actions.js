import * as APIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses,
});

export const receiveBusiness = ({ business, reviews, authors }) => ({
  type: RECEIVE_BUSINESS,
  business,
  reviews,
  authors,
});

export const receiveReview = ({ review, average_rating, author }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  author
});

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const fetchBusinesses = filters => {
  return dispatch => {
  return APIUtil.fetchBusinesses(filters).then(businesses => (
      dispatch(receiveBusinesses(businesses))
    ));
  };
};

export const fetchBusiness = id => dispatch => (
  APIUtil.fetchBusiness(id).then(payload => (
    dispatch(receiveBusiness(payload))
  ))
);

export const createBusiness = business => dispatch => (
  APIUtil.createBusiness(business).then(business => (
    dispatch(receiveBusiness(business))
  ))
);
