import React from 'react';
import { withRouter } from 'react-router-dom';
import StarRating from '../business_show/star_rating';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const businessId = this.props.business.id;
    this.props.history.push(`/businesses/${businessId}`);
  }

  render() {
    const { average_rating, body, pic_url, name, category, address, phone } = this.props.business;
    const num = this.props.business.reviews.length
    return (
      <li className="business-index-item" >
        <div className="index-item-info">
          <div className="pic-container" style={{cursor: 'pointer'}} onClick={this.handleClick}>
            <img src={this.props.business.pic_url[0]} />
          </div>
          <div className="info-container">
            <div className="info-top">
              <div className="info-left">
                <h1><a href={`#/businesses/${this.props.business.id}`}>{name}</a></h1>
                <section>
                  <StarRating rating={this.props.business.average_rating} />
                  <span className="review-count">{num} { num <= 1 ? 'review' : 'reviews' }</span>
                  <span>$$ {category}</span>
                </section>
              </div>
              <div className="info-right">
                <span>{phone}</span>
                <span>{address}</span>
              </div>
            </div>
            <div className='info-bottom'>
              <p>{this.props.business.reviews[0] ? this.props.business.reviews[0].body.slice(0, 30) : "Be the first one to review this business"}...<a href={`#/businesses/${this.props.business.id}`}>read more</a></p>

            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(IndexItem);
