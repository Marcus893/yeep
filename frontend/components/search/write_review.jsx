import React from 'react';
import ReviewFilterForm from './review_filter_form';
import BusinessIndex from './business_index';
import BusinessMap from '../business_map/business_map';

const WriteReview = ({ businesses, category, updateFilter }) => (
  <div className="user-pane">
    <div className="upper-bar">
      <ReviewFilterForm category={category} updateFilter={updateFilter} />
    </div>

  </div>
);

export default WriteReview;
