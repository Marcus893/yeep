import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class BigBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {category: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(filter, updateFilter) {
    return e => (
      updateFilter(filter, this.state.category),
      this.props.history.push("/search")
    );
  }

  handleChange(e) {
    this.setState({category: e.currentTarget.value});
  }

  handleClick(cate, updateFilter){
    return e => (
      updateFilter("category", cate),
      this.props.history.push('/search')

    );
  }

  render() {
    return (

              <div className="search-bar-container">
                <form className="search-bar"  onSubmit={this.handleSubmit('category', this.props.updateFilter)} >
                  <span className="header">Find</span>
                  <input className="keywords" type="text" value={this.state.category} placeholder="restaurants, nightlife, dry cleaning, auto..." onChange={this.handleChange}/>
                  <span className="header">Near</span>
                  <input type="text" className="location" placeholder="Civic Center, Manhattan, NY" />
                  <button type="submit" className="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>

  );
  }
}

export default withRouter(BigBar);
