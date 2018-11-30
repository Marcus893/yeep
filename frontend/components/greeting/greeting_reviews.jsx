import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import StarRating from "../business_show/star_rating";


class GreetingReviews extends React.Component {


  render() {
    const review = this.props.review;
    const user = this.props.review.author;
    const business = this.props.review.business;



    return (
      <div className="activity-review-container">
        <div className="activity-user">
          <img className="review-user-pic" src={user.img_url} />
          <div className="review-user-info">
            <h4 className="review-user-name">{user.firstname} {user.lastname}</h4>
            <p>Wrote a review</p>
          </div>
        </div>

        <div className="review-biz-pic">
          <Link to={`/businesses/${business.id}`}>
            <img src={business.pic_url[2]} />
          </Link>

          <Link to={`/businesses/${business.id}`}>
            <h4>{business.name}</h4>
          </Link>
        </div>

        <div className="activity-review-wrapper">
          <StarRating rating={review.rating} />
          <div className="activity-review-body">{review.body}</div>
        </div>

        <div className="greeting-review-icon">
          <div className="three-icons">
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>
            <i className="fa fa-smile-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </div>

          <div className="one-icon">
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )

  }
}

export default withRouter(GreetingReviews);
