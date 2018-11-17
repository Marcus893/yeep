import React from 'react';
import BusinessIndexItem from './business_index_item';
import BusinessMap from '../business_map/business_map';
import {Link} from 'react-router-dom';
import SearchBar from './search_bar';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: props.category.slice(0),
    };
  }

  handleChange(filter, updateFilter) {
    return e => (
      updateFilter(filter, e.currentTarget.value)
    );
  }

  handleClick(cate, updateFilter){
    return e => (
      updateFilter("category", cate),
      this.props.history.push('/search')

    );
  }


  render() {
    return (<div className="user-pane">
        <div className="upper-bar">

          <SearchBar category={this.state.category} updateFilter={this.props.updateFilter} businesses={this.props.businesses} />

          <div className="top-content-container">
            <div className="top-content">
              <h1>Best {this.state.category} in New York</h1>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="business-list">
            {this.props.businesses.map(business => (
              <BusinessIndexItem business={business} key={business.id} />
            ))}
          </div>
          <div className="right-map">
            <div className="map-box">
              <BusinessMap businesses={this.props.businesses} updateFilter={this.props.updateFilter} singleBusiness={false} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
