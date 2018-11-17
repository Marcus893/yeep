import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './search_bar';
import BusinessSquare from './business_square';

class WriteReview extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: props.category.slice(0),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
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

 render() {
   let businesses;
   if(this.props.businesses) {
     businesses = this.props.businesses.slice(0, 8).map((business, idx) => (
       <BusinessSquare key={business.id} business={business} idx={idx} />
     ));
   } else {
     businesses = <div />
   }
    return (
      <div className="user-pane">
        <div className="upper-bar">

                  <SearchBar category={this.props.category} updateFilter={this.props.updateFilter} />

            <div className="top-container">
              <div className="top-left">
                <h1>Your Next Review Awaits</h1>
                <h2>Review everything from your favourite burger to your dentist.</h2>
                <div className="searchbar-container">
                  <form className="searchbar" onSubmit={this.handleSubmit('category', this.props.updateFilter)} >
                    <div className="search-find">
                      <span className="search-title">Find</span>
                      <input className="search-input" type="text" value={this.state.category} onChange={this.handleChange} />
                    </div>
                    <div className='search-loc'>
                      <span className="search-title">Near</span>
                      <input className="search-input" type="text" />
                    </div>
                    <button type="submit" className="button">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="top-image">
                <img src="https://yeep.herokuapp.com/assets/review_search-01efef36d4d707bb652cd40f42f942c505071219eeecd8c1fef5210b21e13ee9.png" />
              </div>

            </div>

          <div className="down-container">
            <h2>Been to these businesses recently?</h2>
            <div className="square-container">{businesses}</div>
          </div>

          </div>
        </div>);
  }
}

export default WriteReview;
