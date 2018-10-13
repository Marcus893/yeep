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

  handleClick(cate, updateFilter){
    return e => (
      updateFilter("category", cate),
      this.props.history.push('/search')

    );
  }

 render() {
    return (<div>
      <div className="nav-container">
        <div className="nav-upper">
          <div className="upper-inner-container">
            <a href="#/"><h2 style={{color: 'white', padding: '5px'}}>Yeep</h2></a>
            <div className="search-bar-container">
              <SearchBar category={this.props.category} updateFilter={this.props.updateFilter} />
            </div>
          </div>
        </div>
        <div className="nav-lower">
          <div className="lower-inner-container">
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
