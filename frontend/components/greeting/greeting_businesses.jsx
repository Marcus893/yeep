import React from "react";
import { withRouter, Link } from "react-router-dom";
import StarRating from "../business_show/star_rating";

class GreetingBusinesses extends React.Component {
  render() {
    let business = this.props.business;
    let reviewLength = this.props.business.reviews.length;
    let averageRating = this.props.business.average_rating;

    return (
      <div className="biz-box">
        <div className="photo-box">
          <Link to={`/businesses/${business.id}`}>
            <img className="biz-img" src={business.pic_url[0]} />
          </Link>
        </div>
        <div className="info-box">
          <Link className="small-header" to={`/businesses/${business.id}`}>{business.name}</Link>
          <section className="review-and-star">
            <StarRating rating={averageRating} />

          <p className="reviews-counter">{reviewLength} {reviewLength <= 1 ? 'review' : 'reviews' }</p>
          </section>
          {business.address}
          <p className="fire"><i className="fa fa-fire"></i>  opened 3 weeks ago</p>
        </div>
      </div>
    )
  }
}

export default GreetingBusinesses;
