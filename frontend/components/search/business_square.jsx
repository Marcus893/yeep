import React from "react";
import { withRouter, Link } from "react-router-dom";
import StarRating from "../business_show/star_rating";

class BusinessSquare extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let score = this.props.business.average_rating;
    return (
      <div className="entire-thing">
        <div className="img-wrapper">
          <Link className="image-link" to={`/businesses/${this.props.business.id}`}><img src={this.props.business.pic_url} /></Link>
        </div>
        <div className="info-right-wrapper">
          <Link className="name-link" to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
          <h3>{this.props.business.address}</h3>
          <StarRating rating={score} />
        </div>
      </div>
    )

  }
}

export default BusinessSquare;
