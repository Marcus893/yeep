import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import reviewsReducer from './reviews_reducer';
import businessesReducer from './businesses_reducer';
import photosReducer from './photos_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  reviews: reviewsReducer,
  businesses: businessesReducer,
  photos: photosReducer
});

export default entitiesReducer;
