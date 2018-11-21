import React from 'react';
import {Link} from 'react-router-dom';
import BusinessMap from '../business_map/business_map';
import ReviewFormContainer from './review_form_container';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/review_util';
import ReviewListItemContainer from './review_list_item_container';
import StarRating from './star_rating';
import SearchBar from '../search/search_bar';


// business, businessId, fetchBusiness, reviews, authors

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: { [this.props.businessId]: this.props.business }
  };
  this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.businessId !== nextProps.match.params.businessId) {
      this.props.fetchBusiness(nextProps.match.params.businessId);
    }
  }

  reviewList(reviews, authors) {
    return this.props.reviews.reverse().map(review => {
    return <ReviewListItemContainer
      review={review}
      key={review.id}
      author={this.props.authors[review.author_id]}
    />})}

  handleClick(cate, updateFilter){
      return e => (
        updateFilter("category", cate),
        this.props.history.push('/search')
      );
    }

  render() {

    return (<div className="single-business-show">

              <SearchBar category={this.props.business.category} updateFilter={this.props.updateFilter} />

      <div className="business-container">
        <div className="business-elements">
          <div className="business-show">
            <div className="business-info">
              <div className="info-left">
                <h1>{this.props.business.name}</h1>
                <section className="review-under-name">
                  <StarRating rating={this.props.business.average_rating} />
                  <span>{this.props.reviews.length} {this.props.reviews.length <= 1 ? 'review' : 'reviews' }</span>
                </section>
              </div>
              <div className="info-right">
                <div className="reviewbtn">
                  <i className="fa fa-star"></i>
                  <ReviewLink
                    component={ReviewFormContainer}
                    to={`/businesses/${this.props.businessId}/review`}
                    label="Write A Review" />
                  <ProtectedRoute
                    path="/businesses/:businessId/review"
                    component={ReviewFormContainer}
                  />
                </div>
              </div>
            </div>
            <div className="map-and-pic">
              <div className="map-box-container">
                <div className="map-box">
                  <section className="map">
                    <div id="map-container">
                      <div className="single-business-map">
                        <BusinessMap
                          businesses={this.state.businesses}
                          businessId={this.props.businessId}
                          singleBusiness={true}
                          fetchBusiness={this.props.fetchBusiness}
                          business={this.props.business}
                        />
                      </div>
                    </div>
                  </section>
                  <section className="address">
                    <ul className="page-info">
                      <li>
                        <span className="fa-icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                        <span className="address-info">{this.props.business.address}</span>
                      </li>
                      <li>
                        <span className="fa-icon"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                        <a href="http://www.google.com/maps">Get Directions</a>
                      </li>
                      <li>
                        <span className="fa-icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                        <span>{this.props.business.phone}</span>
                      </li>
                      <li>
                        <span className="fa-icon"><i className="fa fa-mobile" aria-hidden="true"></i></span>
                        <a>Send to your phone</a>
                      </li>
                      <li>
                        <span className="fa-icon"><i className="fa fa-home"></i></span>
                        <a href="#/">Yeep Home</a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
                <div className="pic-box">
                  <div className="img-box">
                    <img src={this.props.photos[0] ? this.props.photos[0].url : ""} />
                    <img src={this.props.photos[1] ? this.props.photos[1].url : ""} />
                    <img src={this.props.photos[2] ? this.props.photos[2].url : ""} />
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>

      <div className="business-lowerhalf">
        <div className="business-reviews">
          <h2>Recommended Reviews<span> for {this.props.business.name}</span></h2>
            <div className="review-list">
              {this.reviewList(this.props.reviews, this.props.authors)}
            </div>
        </div>
        <div className="sidebar">
          <div className="hours-price">

              <li>
                <div className="hours-icon">
                  <i className="fa fa-clock-o"></i>
                </div>
                <div className="content">
                  <span className="key">Today</span>
                  <span className="value">11:00 am - 10:00 pm</span>
                </div>
              </li>
              <li>
                <div className="price-icon">
                  <i className="fa fa-usd"></i>
                </div>
                <div className="content">
                  <span className="key">Price range</span>
                  <span className="value">Inexpensive</span>
                </div>
              </li>

          </div>
          <div className="hours-info">
            <h3>Hours</h3>
            <table className="hour-table">
              <tbody>
                <tr>
                  <th>Mon</th>
                  <td>
                    <span>8:00 am</span>&nbsp;-&nbsp;<span>9:00 pm</span>
                  </td>
                </tr>
                <tr>
                  <th>Tue</th>
                  <td>
                    <span>8:00 am</span>&nbsp;-&nbsp;<span>9:00 pm</span>
                  </td>
                </tr>
                <tr>
                  <th>Wed</th>
                  <td>
                    <span>8:00 am</span>&nbsp;-&nbsp;<span>9:00 pm</span>
                  </td>
                </tr>
                <tr>
                  <th>Thu</th>
                  <td>
                    <span>8:00 am</span>&nbsp;-&nbsp;<span>10:00 pm</span>
                  </td></tr>
                <tr>
                  <th>Fri</th>
                  <td>
                    <span>12:00 am</span>&nbsp;-&nbsp;<span>10:00 pm</span>
                  </td>
                </tr>
                <tr>
                  <th>Sat</th>
                  <td>
                    <span>12:00 am</span>&nbsp;-&nbsp;<span>6:00 pm</span>
                  </td>
                </tr>
                <tr>
                  <th>Sun</th>
                  <td>
                    <span>8:00 am</span>&nbsp;-&nbsp;<span>9:00 pm</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="more-info">
            <h3>More Business Info</h3>
              <dl>
                <dt>Takes Reservations</dt><dd>No</dd>
              </dl>
              <dl>
                <dt>Delivery</dt><dd>No</dd>
              </dl>
              <dl>
                <dt>Take-out</dt><dd>Yes</dd>
              </dl>
              <dl>
                <dt>Accepts Credit Cards</dt><dd>Yes</dd>
              </dl>
              <dl>
                <dt>Accepts Google Pay</dt><dd>Yes</dd>
              </dl>
              <dl>
                <dt>Good For</dt><dd>Brunch, Lunch, Dinner, Dessert</dd>
              </dl>
              <dl>
                <dt>Parking</dt><dd>Street</dd>
              </dl>
              <dl>
                <dt>Bike Parking</dt><dd>No</dd>
              </dl>
              <dl>
                <dt>Good for kids</dt><dd>Yes</dd>
              </dl>
              <dl>
                <dt>Good for Groups</dt><dd>Yes</dd>
              </dl>
              <dl>
                <dt>Outdoor Seating</dt><dd>No</dd>
              </dl>
              <dl>
                <dt>Pets Allowed</dt><dd>Yes</dd>
              </dl>
              <dl>
                <dt>WIFI</dt><dd>Yes</dd>
              </dl>
              <dl>
                <dt>Has TV</dt><dd>No</dd>
              </dl>
              <dl>
                <dt>Waiter Service</dt><dd>No</dd>
              </dl>
              <dl>
                <dt>Caters</dt><dd>Yes</dd>
              </dl>
          </div>
        </div>
      </div>

    </div>);
}
}

export default BusinessShow;
