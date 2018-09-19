import React from 'react';
import {Link} from 'react-router-dom';
import BusinessMap from '../business_map/business_map';
import ReviewFormContainer from './review_form_container';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/review_util';
import ReviewListItemContainer from './review_list_item_container';

const BusinessShow = ({ business, businessId, fetchBusiness, reviews, authors }) => {
  const businesses = { [businessId]: business };

  const reviewList = (reviews, authors) => (
    reviews.map(review => {
      return <ReviewListItemContainer
        review={review}
        key={review.id}
        author={authors[review.author_id]}
      />;
  })
  );

  return(
  <div className="single-business-show">
    <div className="nav-container">
      <div className="nav-upper">
        <div className="upper-inner-container">
          <a href="#/"><h2>yeep</h2></a>
          <div className="search-bar-container">
            <form className="search-bar">
              <span className="header">Find</span>
              <input type="text" className="keywords" placeholder="restaurant, nightlife, dry cleaning..." />
              <span className="header">Near</span>
              <input type="text" className="location" placeholder="Civic Center, Manhattan, NY" />
              <Link type="submit" className="submit" to="/search">
                <i className="fa fa-search"></i>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div className="nav-lower">
        <div className="lower-inner-container">
          <div className="tags">
            <a href="#/search?Restaurants">
              <h3><i className="fa fa-cutlery"></i>Restaurant</h3>
            </a>
            <a href="#/search?Nightlife">
              <h3><i className="fa fa-glass"></i>Nightlife</h3>
            </a>
            <a href="#/search?HomeServices">
              <h3><i className="fa fa-wrench"></i>Home Services</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="business-container">
      <div className="business-elements">
        <div className="business-show">
          <div className="business-info">
            <div className="info-left">
              <h1>{business.name}</h1>
              <section className="review">
                <div className="star"></div>
                <span>8 reviews</span>
              </section>
              <section className="price-tag">
                <span>$$</span>
              </section>
            </div>
            <div className="info-right">
              <div className="reviewbtn">
                <i className="fa fa-star"></i>
                <ReviewLink
                  component={ReviewFormContainer}
                  to={`/businesses/${businessId}/review`}
                  label="Write a Review" />
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
                        businesses={businesses}
                        businessId={businessId}
                        singleBusiness={true}
                        fetchBusiness={fetchBusiness}
                      />
                    </div>
                  </div>
                </section>
                <section className="address">
                  <ul className="page-info">
                    <li>
                      <span className="fa-icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                      <span className="address-info">1370 Broadway, New York, NY 10012</span>
                    </li>
                    <li>
                      <span className="fa-icon"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                      <a>Get Directions</a>
                    </li>
                    <li>
                      <span className="fa-icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                      <span>(873) 098-3893</span>
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
            <div className="pic-container">
              <div className="pic-box">
                <div className="img">
                  <img src={business.pic_url} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="business-lowerhalf">
      <div className="business-reviews">
        <h2>Recommended Reviews<span> for {business.name}</span></h2>
          <div className="review-list">
            {reviewList(reviews, authors)}
          </div>
      </div>
      <div className="sidebar">
        <div className="hours-price">
          <ul>
            <li>
              <div className="hours-icon">
                <i className="fa fa-clock-o"></i>
              </div>
              <div className="content">
                <span className="key">Today</span>
                <span className="value"> Today 11:00 am - 10:00 pm</span>
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
          </ul>
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

  </div>
);
};

export default BusinessShow;
