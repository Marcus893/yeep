import React from 'react';
import {Link} from 'react-router-dom';
import BusinessMap from '../business_map/business_map';
import ReviewFormContainer from './review_form_container';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/review_util';
import ImgBox from './img_box';
import StarRating from './star_rating';
import SearchBar from '../search/search_bar';
import { withRouter } from 'react-router-dom';


// business, businessId, fetchBusiness, reviews, users

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


  handleClick(cate, updateFilter){
      return e => (
        updateFilter("category", cate),
        this.props.history.push('/search')
      );
    }

  render() {
    var ts = new Date();

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

                  <ImgBox photos={this.props.photos} />


            </div>
          </div>
        </div>
      </div>

      <div className="business-lowerhalf">
        <div className="business-reviews">
          <h2>Recommended Reviews<span> for {this.props.business.name}</span></h2>
            <div className="review-list">
              {this.props.reviews.slice(0).reverse().map(review => {

                return (
                  <div className="business-page">
                    <ul>
                      <li className="review">
                        <div className="review-container">
                          <div className="user-info">
                            <div className="profile-img">
                              <img src={this.props.users[review.author_id] ? this.props.users[review.author_id].img_url : null} />
                            </div>
                          </div>
                          <div className="info">
                            <section className="name"><a>{this.props.users[review.author_id] ? this.props.users[review.author_id].firstname : null} {this.props.users[review.author_id] ? this.props.users[review.author_id].lastname.slice(0,1) : null}.</a></section>
                            <section className="review-count">
                              <div>
                                <i className="fa fa-star"></i>
                              </div>
                              <span>{Math.floor(Math.random() * 100)}</span>
                              <span className="light-weight">reviews</span>
                            </section>
                            <section className="photo-count">
                              <i className="fa fa-camera"></i>
                              <span>{Math.floor(Math.random() * 100)}</span>
                              <span className="light-weight">photos</span>
                            </section>
                          </div>
                        </div>
                        <div className="review-info">
                          <div className="review-content">
                            <div className="rate">
                              <StarRating rating={review.rating} />
                              <span className="date"> {ts.toLocaleDateString()}</span>
                            </div>
                            <p className="body">{review.body}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                )})
              }
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

export default withRouter(BusinessShow);
