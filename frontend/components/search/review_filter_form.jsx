import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './search_bar';


class ReviewFilterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: props.category.slice(0),
    };
  }

  // handleChange(filter, updateFilter) {
  //   return e => (
  //     updateFilter(filter, e.currentTarget.value)
  //   );
  // }

  handleChange() {
    return e => (
      this.setState({ category: e.currentTarget.value }
      ));
  }

 render() {
    return (<div>
      <div className="nav-container">
        <div className="nav-upper">
          <div className="upper-inner-container">
            <a href="#/"><h2>yeep</h2></a>
            <div className="search-bar-container">
              <SearchBar category={this.props.category} updateFilter={this.props.updateFilter} />
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
                  <span className="search-input"><input type="text" value={this.state.category} onChange={this.handleChange()} /></span>
                </label>
                <label className='search-loc'>
                  <span className="search-title">Near</span>
                  <span className="search-input"><input type="text" /></span>
                </label>
                <Link type="submit" className="button" to="/search">
                  <i className="fa fa-search"></i>
                </Link>
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
