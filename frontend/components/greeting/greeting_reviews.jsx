import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import StarRating from "../business_show/star_rating";
import MappleToolTip from "reactjs-mappletooltip";

class GreetingReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlueActive: false,
      isGreenActive: false,
      isOrangeActive: false,
      isRedActive: false
    };
    this.onBlueClick = this.onBlueClick.bind(this)
    this.onGreenClick = this.onGreenClick.bind(this)
    this.onOrangeClick = this.onOrangeClick.bind(this)
    this.onRedClick = this.onRedClick.bind(this)
  }

  onBlueClick() {
    this.setState({
      isBlueActive: !this.state.isBlueActive
    })
  }

  onGreenClick() {
    this.setState({
      isGreenActive: !this.state.isGreenActive
    })
  }

  onOrangeClick() {
    this.setState({
      isOrangeActive: !this.state.isOrangeActive
    })
  }

  onRedClick() {
    this.setState({
      isRedActive: !this.state.isRedActive
    })
  }

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
          <div className="activity-review-body">{review.body.length > 200 ? review.body.slice(0, 200) + " ......" : review.body }<Link to={`/businesses/${business.id}`}>View More</Link></div>
        </div>

        <div className="greeting-review-icon">
          <div className="three-icons">
            <MappleToolTip>
              <i onClick={this.onOrangeClick} className={this.state.isOrangeActive ? 'fa fa-check-circle-o orange' : 'fa fa-check-circle-o'} aria-hidden="true"></i>
              Useful
            </MappleToolTip>

            <MappleToolTip>
              <i onClick={this.onBlueClick} className={this.state.isBlueActive ? "fa fa-smile-o blue" : "fa fa-smile-o"} aria-hidden="true"></i>
              Funny
            </MappleToolTip>

            <MappleToolTip>
              <i onClick={this.onGreenClick} className={this.state.isGreenActive ? "fa fa-star-o green" : "fa fa-star-o"} aria-hidden="true"></i>
              Cool
            </MappleToolTip>
          </div>

          <div className="one-icon">
            <MappleToolTip>
              <i onClick={this.onRedClick} className={this.state.isRedActive ? "fa fa-thumbs-o-up red" : "fa fa-thumbs-o-up"} aria-hidden="true"></i>
              Like
            </MappleToolTip>
          </div>
        </div>
      </div>
    )

  }
}

export default withRouter(GreetingReviews);
