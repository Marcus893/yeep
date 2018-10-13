import React from 'react';
import { withRouter } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToBusinessShow = this.navigateToBusinessShow.bind(this);
  }

  navigateToBusinessShow() {
    const url = `/businesses/${this.props.match.params.businessId}`
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const businessId = parseInt(this.props.match.params.businessId);
    const review = Object.assign({}, this.state, {
      business_id: businessId
    });
    this.props.createReview(review);
    this.navigateToBusinessShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  ratingMessage() {
    switch(this.state.rating) {
      case 1:
        return <p id="rating-message">Eek! Methinks not.</p>
      case 2:
        return <p id="rating-message">"Meh. I've experienced better."</p>
      case 3:
        return <p id="rating-message">A-OK.</p>
      case 4:
        return <p id="rating-message">Yay! I'm a fan.</p>
      case 5:
        return <p id="rating-message">Woohoo! As good as it gets!</p>
      default:
        return <p id="rating-message">Select your rating</p>
    }
  }

  render() {
    const businessId = this.props.match.params.businessId;
    const business = this.props.businesses[businessId];
    const businessName = business ? business.name : "";
    const { rating } = this.state;
    return (
      <div className="review-form">
        <div className="review-heading">
          <div className="heading-container">
            <div><a href="#/"><h2 style={{color: 'white'}}>Yeep</h2></a></div>
            <h1>Write a review</h1>
          </div>
        </div>
        <div className="content-wrapper">
          <a href={`#/businesses/${businessId}`}>{businessName}</a>
          <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="rating">

              <span className={ (this.state.rating > 0) ? "fa fa-star red-star" : "fa fa-star grey-star"}
                onClick={() => this.setState({ rating: 1 })}></span>

              <span className={ (this.state.rating > 1) ? "fa fa-star red-star" : "fa fa-star grey-star"}
                  onClick={() => this.setState({ rating: 2 })}></span>

              <span className={ (this.state.rating > 2) ? "fa fa-star red-star" : "fa fa-star grey-star"}
                  onClick={() => this.setState({ rating: 3 })}></span>

              <span className={ (this.state.rating > 3) ? "fa fa-star red-star" : "fa fa-star grey-star"}
                  onClick={() => this.setState({ rating: 4 })}></span>

              <span className={ (this.state.rating > 4) ? "fa fa-star red-star" : "fa fa-star grey-star"}
                  onClick={() => this.setState({ rating: 5 })}></span>

                <div className="text">
                  {this.ratingMessage()}
                </div>

            </div>
            <br/>


            <textarea cols="100"
              rows="50"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder="Your review helps others learn about great local businesses.

              Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
              maxLength="500"
              ></textarea>
            <br/>
            <input className="post-review-btn" type="submit" value="Post Review" />

          </form>
        </div>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
