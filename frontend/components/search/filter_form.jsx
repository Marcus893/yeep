import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './search_bar';


class FilterForm extends React.Component {
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
      <div className="top-content-container">
        <div className="top-content">
          <h1>Best {this.state.category} in New York</h1>
        </div>
      </div>
     </div>);
  }
}

export default FilterForm;
