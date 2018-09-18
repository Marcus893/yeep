import { connect } from 'react-redux';
import { createReview, fetchBusiness } from '../../actions/business_actions.js';
import ReviewForm from './review_form';

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  fetchBusiness: business => dispatch(fetchBusiness(business))
});

const mapStateToProps = state => {

  return {
  businesses: state.entities.businesses
};};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
