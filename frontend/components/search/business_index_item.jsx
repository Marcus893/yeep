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
    const { average_rating, body, pic_url, name, category } = this.props.business;
    return (
      <li className="business-index-item" onClick={this.handleClick} >
        <div className="index-item-info">
          <div className="pic-container">
            <img src={pic_url} />
          </div>
          <div className="info-container">
            <div className="info-top">
              <div className="info-left">
                <h1><a href={`#/businesses/${this.props.business.businessId}`}>{name}</a></h1>
                <section className="review">
                  <div className="star"></div>
                  <span className="review-count">{average_rating} reviews</span>
                </section>
                <section className="price-tag">
                  <span>$$ {category}</span>
                </section>
              </div>
              <div className="info-right">
                <span>(737) 934-3874</span>
                <span>838 Peanut St</span>
                <span>New York, NY</span>
              </div>
            </div>
            <div className='info-bottom'>
              <p>Great place to visit, will definitely... <a href={`#/businesses/${this.props.business.businessId}`}>read more</a></p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(IndexItem);
