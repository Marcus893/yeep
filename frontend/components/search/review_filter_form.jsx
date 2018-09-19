import React from 'react';


class ReviewFilterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: props.category,
    };
  }

  handleChange(filter, updateFilter) {
    return e => (
      updateFilter(filter, e.currentTarget.value)
    );
  }

 render() {
    return (<div>
      <div className="nav-container">
        <div className="nav-upper">
          <div className="upper-inner-container">
            <a href="#/"><h2>yeep</h2></a>
            <div className="search-bar-container">
              <form className="search-bar">
                <span className="header">Find</span>
                <input className="keywords" type="text" value={this.props.category} onChange={this.handleChange('category', this.props.updateFilter)} placeholder="dry cleaners, burgers, spas..." />
                <span className="header">Near</span>
                <input type="text" className="location" placeholder="Civic Center, Manhattan, NY" />
                <button type="submit" className="submit" >
                  <i className="fa fa-search"></i>
                </button>
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

        <div className="top-container">
          <div className="top-left">
            <h1>Your First Review Awaits</h1>
            <p>Review your favorite businesses and share your experiences with our community.</p>
            <div className="searchbar-container">
              <form className="searchbar">
                <label className="search-find">
                  <span className="search-title">Find</span>
                  <span className="search-input"><input type="text" value={this.props.category} onChange={this.handleChange('category', this.props.updateFilter)} /></span>
                </label>
                <label className='search-loc'>
                  <span className="search-title">Near</span>
                  <span className="search-input"><input type="text" /></span>
                </label>
                <button className="search-btn" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="top-image">
            <img src="https://yeep.herokuapp.com/assets/review_search-01efef36d4d707bb652cd40f42f942c505071219eeecd8c1fef5210b21e13ee9.png" />
          </div>

        </div>

      <div className="white-space"></div>
     </div>);
  }
}

export default ReviewFilterForm;
