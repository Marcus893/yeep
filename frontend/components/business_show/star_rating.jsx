import React from 'react';

const StarRating = ({rating}) => {
  return (
    <div>
      <span className={ (rating > 0) ? "fa fa-star red-star" : "fa fa-star grey-star"}></span>
      <span className={ (rating > 1) ? "fa fa-star red-star" : "fa fa-star grey-star"}></span>
      <span className={ (rating > 2) ? "fa fa-star red-star" : "fa fa-star grey-star"}></span>
      <span className={ (rating > 3) ? "fa fa-star red-star" : "fa fa-star grey-star"}></span>
      <span className={ (rating > 4) ? "fa fa-star red-star" : "fa fa-star grey-star"}></span>
    </div>
  )
};

export default StarRating;
