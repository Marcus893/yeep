import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author }) => {
  const { rating, body } = review;
  const { img_url, firstname, lastname } = author;
  return (
    <div className="business-page">
      <ul>
        <li className="review">
          <div className="review-container">
            <div className="user-info">
              <div className="profile-img">
                <img src={img_url} />
              </div>
            </div>
            <div className="info">
              <section className="name"><a>{firstname} {lastname.slice(0,1)}.</a></section>
              <section className="review-count">
                <div>
                  <i className="fa fa-star"></i>
                </div>
                <span>32</span>
                <span className="light-weight">reviews</span>
              </section>
              <section className="photo-count">
                <i className="fa fa-camera"></i>
                <span>18</span>
                <span className="light-weight">photos</span>
              </section>
            </div>
          </div>
          <div className="review-info">
            <div className="review-content">
              <div className="rate">
                <div className="star"></div>
                <span className="date">4/7/2017</span>
              </div>
              <p className="body">{body}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({entities: { users }}, { review }) => {
  return {
    author: users[review.author_id]
  };
};

export default connect(mapStateToProps)(Review);
