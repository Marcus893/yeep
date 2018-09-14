import React from 'react';
import { withRouter } from 'react-router-dom';
import BusinessShowContainer from '../business_show/business_show_container';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const businessId = this.props.business.id;
    this.props.history.push(`/businesses/${businessId}`);
  }

  render() {
    const { average_rating, body, pic_url } = this.props.business;
    return (
      <div className="business-index-item" onClick={this.handleClick} >
        <div className="index-item-info">
          <span className="index-item-category">Rating:</span>
          <span className="index-item-copy">{average_rating || 'No reviews yet'}</span>
          <span className="index-item-category">Body:</span>
          <span className="index-item-copy">{body}</span>
        </div>
        <img src={pic_url}/>
      </div>
    );
  }
}

export default withRouter(IndexItem);
