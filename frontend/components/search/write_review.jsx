import React from 'react';
import ReviewFilterForm from './review_filter_form';

const WriteReview = ({ category, updateFilter }) => (
  <div className="user-pane">
    <div className="upper-bar">
      <ReviewFilterForm category={category} updateFilter={updateFilter} />
    </div>

  </div>
);

export default WriteReview;
