import React from 'react';


import ReviewListItemContainer from './review_list_item_container';

const reviewList = (reviews) => (
  reviews.map(review => (
    <ReviewListItemContainer
      review={review}
      key={review.id}
    />
  ))
);

const BusinessDetail = ({ business, reviews }) => {
  return (
    <div>
      <ul className="business-list">
        <img className="index-image" src={business.pic_url}/>
        <li>Rating: {business.average_rating || 'No reviews yet'}</li>
        <li>Body: {business.body}</li>
        <li>Category: {business.category}</li>
        <li>Latitude: {business.lat}</li>
        <li>Longitude: {business.lng}</li>
      </ul>
      <br/>
      <div className="reviews">
        <h3>Reviews</h3>
        {reviewList(reviews)}
      </div>
    </div>
  );
};

export default BusinessDetail;
