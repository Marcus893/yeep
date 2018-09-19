import React from 'react';
import { Link } from 'react-router-dom';
import Center from './center'

const Greeting = ({currentUser, logout}) => {

  const sessionLinks = () => (
    <div className="main-page">
      <div className="homepage">
        <nav className="auth">
          <div className="write-a-review">
            <Link className="review-btn" to="/writeareview">Write a Review</Link>
          </div>
          <div className="login-signup">
            <Link className="loginbtn" to="/login">Log In</Link>
            <Link className="signupbtn" to="/signup">Sign Up</Link>
          </div>
        </nav>
        <div className="logo-container">
          <Link className="logo" to="/">Yeep</Link>
        </div>
        <div className="search-container">
          <form className="search">
            <span className="header">Find</span>
            <input type="text" className="keywords" placeholder="dry cleaners, burgers, spas..." />
            <span className="header">Near</span>
            <input type="text" className="location" placeholder="Civic Center, Manhattan, NY" />
            <Link type="submit" className="submit" to="/search">
              <i className="fa fa-search"></i>
            </Link>
          </form>
        </div>
        <div className="tags-container">
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
      <div className="center-container">
        <div className="city-nav">
          <h1 className="city-name">Yelp Brooklyn</h1>
        </div>
        <div className="hot-businesses-container">
          <h3 className="header3">Hot & New Businesses</h3>
          <div className="new-biz-container">
            <div  className="biz-box">
              <div className="photo-box">
                <a href="#/businesses/1">
                  <img className="biz-img" src="http://www.stphilips.us/wp-content/uploads/2018/08/pub-theology-image.jpg" />
                </a>
              </div>
              <div className="info-box">
                <a className="small-header" href="#/businesses/1">Fizgerald Pub</a>
                <div className="pub-stars"></div>
                <p className="reviews-counter">4 reviews</p>
                <p className="price-counter">$</p>
                <a className="category-link" href="#/search?Nightlife">Nightlife</a>
                <p className="address">138 E 28th St, New York, NY 10021</p>
                <p className="fire"><i className="fa fa-fire"></i>  opened 3 weeks ago</p>
              </div>
            </div>
            <div  className="biz-box">
              <div className="photo-box">
                <a href="#/businesses/2">
                  <img className="biz-img" src="https://bergenmama.com/images/uploads/made/images/uploads/Shumi_Sushi_and_Japanese_Restaurant_in_Ridgewood_NJ_740_385_c1.jpg" />
                </a>
              </div>
              <div className="info-box">
                <a className="small-header" href="#/businesses/2">Sushi Ryusei</a>
                <div className="pub-stars"></div>
                <p className="reviews-counter">17 reviews</p>
                <p className="price-counter">$</p>
                <a className="category-link" href="#/search?Restaurant">Restaurant</a>
                <p className="address">160 E 38th St, New York, NY 10016</p>
                <p className="fire"><i className="fa fa-fire"></i>  opened 5 weeks ago</p>
              </div>
            </div>
            <div  className="biz-box">
              <div className="photo-box">
                <a href="#/businesses/3">
                  <img className="biz-img" src="http://www.qualitycommercialcleaning.net/wp-content/uploads/2017/09/broomberg-home-cleaning-service.jpg" />
                </a>
              </div>
              <div className="info-box">
                <a className="small-header" href="#/businesses/3">Handy</a>
                <div className="pub-stars"></div>
                <p className="reviews-counter">8 reviews</p>
                <p className="price-counter">$</p>
                <a className="category-link" href="#/search?HomeService">HomeService</a>
                <p className="address">Serving New York and the Surrounding Area</p>
                <p className="fire"><i className="fa fa-fire"></i>  opened 8 weeks ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-categories">
          <h3 className="header3">Browse Business By category</h3>
          <div className="category-boxes-container">
            <div className="category-box">
              <a href="#/search?Restaurant"><img className="icon" src="https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/80b92cd513f0/assets/img/categories/72x72_restaurants.png" /></a>
              <h3>Restaurants</h3>
            </div>
            <div className="category-box">
              <a href="#/search?Shopping"><img className="icon" src="https://s3-media2.fl.yelpcdn.com/assets/srv0/homepage/ad1f85392c04/assets/img/categories/72x72_shopping.png" /></a>
              <h3>Shopping</h3>
            </div>
            <div className="category-box">
              <a href="#/search?Nightlife"><img className="icon" src="https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/4ee31d03d5b2/assets/img/categories/72x72_nightlife.png" /></a>
              <h3>Nightlife</h3>
            </div>
            <div className="category-box">
              <a href="#/search?Beauty"><img className="icon" src="https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/dda5bcbe7e6c/assets/img/categories/72x72_beauty.png" /></a>
              <h3>Beauty</h3>
            </div>
            <div className="category-box">
              <a href="#/search?Auto"><img className="icon" src="https://s3-media2.fl.yelpcdn.com/assets/srv0/homepage/59b42d70fa94/assets/img/categories/72x72_automotive.png" /></a>
              <h3>Auto</h3>
            </div>
            <div className="category-box">
              <a href="#/search?HomeServices"><img className="icon" src="https://s3-media2.fl.yelpcdn.com/assets/srv0/homepage/52d0e24aea08/assets/img/categories/72x72_home_services.png" /></a>
              <h3>HomeService</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return currentUser ? <Center currentUser={currentUser} logout={logout} /> : sessionLinks();
};

export default Greeting;
