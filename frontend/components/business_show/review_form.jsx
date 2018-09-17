import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
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

  render() {
    return (
      <div className="review-form">
        <div className="heading">
          <div className="heading-container">
            <div className="logo"><a href="#/">yeep</a></div>
            <h1>Write a review</h1>
          </div>
        </div>
        <div className="content-container">
          <a href="#/businesses/:businessId">business name</a>
          <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="rating">
              <div className="rating-stars">
                <li className="rating-star">
                  <input id="rating-1" type="radio" value="1"></input>
                  <label id="rating-1">Fuck NO</label>
                </li>
                <li className="rating-star">
                  <input id="rating-2" type="radio" value="2"></input>
                  <label id="rating-2">It could do better</label>
                </li>
                <li className="rating-star">
                  <input id="rating-3" type="radio" value="3"></input>
                  <label id="rating-3">It's OK</label>
                </li>
                <li className="rating-star">
                  <input id="rating-4" type="radio" value="4"></input>
                  <label id="rating-4">Great!</label>
                </li>
                <li className="rating-star">
                  <input id="rating-5" type="radio" value="5"></input>
                  <label id="rating-5">Amazing!!!</label>
                </li>
              </div>
              <span><p>Select Your Rating</p></span>
            </div>
            <br/>


            <textarea cols="100"
              rows="50"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder="Your review helps others learn about great local businesses.

              Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
              maxlength="500"
              ></textarea>
            <br/>
            <input type="submit" value="Post" />
          </form>
        </div>
        <button onClick={this.navigateToBusinessShow}>Cancel</button>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
