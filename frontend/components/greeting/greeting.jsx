import React from 'react';
import { Link } from 'react-router-dom';
import BigBar from './big_bar';
import GreetingBusinesses from './greeting_businesses';
import GreetingReviews from './greeting_reviews';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "background1"
    };
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
    this.props.fetchAllReviews();
    this.intervalId = setTimeout(this.update, 5000);
  }

  componentWillUpdate() {
    this.intervalId = setTimeout(this.update, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  update() {
    if(this.state.className === "background1") {
      this.setState({
        className: "background2"
      });
    } else if(this.state.className === "background2") {
      this.setState({
        className: "background3"
      });
    } else if(this.state.className === "background3") {
      this.setState({
        className: "background4"
      });
    } else if(this.state.className === "background4") {
      this.setState({
        className: "background5"
      });
    } else if(this.state.className === "background5") {
      this.setState({
        className: "background1"
      });
    }
  }

  handleClick(cate, updateFilter) {
    return e => (
      updateFilter("category", cate),
      this.props.history.push('/search')
    );
  }

  render() {
    const isLoggedIn = this.props.currentUser ? true : false;
    let button1;
    let button2;
    let businesses;
    let reviews;

    if(isLoggedIn) {
      button1 = <h2 className="header-name">Hi {this.props.currentUser.firstname}</h2>;
      button2 = <button className="loginbtn" onClick={this.props.logout}>Log Out</button>;
    } else {
      button1 = <Link className="loginbtn" to="/login">Log In</Link>;
      button2 = <Link className="signupbtn" to="/signup">Sign Up</Link>;
    }

    if(this.props.businesses) {
      businesses = this.props.businesses.slice(0, 3).map(business => (
        <GreetingBusinesses key={business.id} business={business} />
      ));
    } else {
      businesses = <div />;
    }

    if(this.props.reviews) {
      reviews = this.props.reviews.map((review, idx) => (
        <GreetingReviews key={idx} review={review} />
      ));
    } else {
      reviews = <div />;
    }

    return (
    <div className="main-page">
      <div className={this.state.className}>

        <nav className="auth">
          <div className="write-a-review">
            <Link className="review-btn" to="/writeareview">Write a Review</Link>
          </div>
          <div className="login-signup">
            {button1}
            {button2}
          </div>
        </nav>
        <div className="logo-container">
          <Link className="logo" to="/">Yeep</Link>
        </div>
        <div className="search-container">
          <BigBar category={this.props.category} updateFilter={this.props.updateFilter} />
        </div>
        <div className="tags-container">
          <div className="tags">
            <a style={{cursor: 'pointer'}} onClick={this.handleClick("restaurants", this.props.updateFilter)}>
              <h3><i className="fa fa-cutlery"></i>Restaurant</h3>
            </a>
            <a style={{cursor: 'pointer'}} onClick={this.handleClick("nightlife", this.props.updateFilter)}>
              <h3><i className="fa fa-glass"></i>Nightlife</h3>
            </a>
            <a style={{cursor: 'pointer'}} onClick={this.handleClick("home service", this.props.updateFilter)}>
              <h3><i className="fa fa-wrench"></i>Home Services</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="center-container">
        <div className="city-nav">
          <h1 className="city-name">Yeep New York</h1>
        </div>
        <div className="hot-businesses-container">
          <h3 className="header3">Hot & New Businesses</h3>
          <div className="new-biz-container">
            {businesses}
          </div>
        </div>

        <div className="greeting-review-container">
            <h3 className="recent-activities-header">Recent Activities</h3>
            <div className="greeting-review">{reviews}</div>
        </div>

        <div className="main-categories">
          <h3 className="header3">Browse Business By category</h3>
          <div className="category-boxes-container">
            <div style={{cursor: 'pointer'}} className="category-box" onClick={this.handleClick("restaurants", this.props.updateFilter)}>
              <img className="icon" src="https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/80b92cd513f0/assets/img/categories/72x72_restaurants.png" /><h3>Restaurants</h3>
            </div>
            <div style={{cursor: 'pointer'}} className="category-box" onClick={this.handleClick("shopping", this.props.updateFilter)}>
              <img className="icon" src="https://s3-media2.fl.yelpcdn.com/assets/srv0/homepage/ad1f85392c04/assets/img/categories/72x72_shopping.png" /><h3>Shopping</h3>
            </div>
            <div style={{cursor: 'pointer'}} className="category-box" onClick={this.handleClick("nightlife", this.props.updateFilter)}>
              <img className="icon" src="https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/4ee31d03d5b2/assets/img/categories/72x72_nightlife.png" /><h3>Nightlife</h3>
            </div>
            <div style={{cursor: 'pointer'}} className="category-box" onClick={this.handleClick("beauty", this.props.updateFilter)}>
              <img className="icon" src="https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/dda5bcbe7e6c/assets/img/categories/72x72_beauty.png" /><h3>Beauty</h3>
            </div>
            <div style={{cursor: 'pointer'}} className="category-box" onClick={this.handleClick("auto", this.props.updateFilter)}>
              <img className="icon" src="https://s3-media2.fl.yelpcdn.com/assets/srv0/homepage/59b42d70fa94/assets/img/categories/72x72_automotive.png" /><h3>Auto</h3>
            </div>
            <div style={{cursor: 'pointer'}} className="category-box" onClick={this.handleClick("home service",this.props.updateFilter)}>
              <img className="icon" src="https://s3-media2.fl.yelpcdn.com/assets/srv0/homepage/52d0e24aea08/assets/img/categories/72x72_home_services.png" /><h3>HomeService</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Greeting;
