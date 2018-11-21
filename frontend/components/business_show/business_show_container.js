import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import { selectReviewsForBusiness, selectBusiness } from '../../reducers/selectors';
import BusinessShow from './business_show';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, { match }) => {

  const businessId = parseInt(match.params.businessId);
  const business = selectBusiness(state.entities, businessId);
  const reviews = Object.values(state.entities.reviews).filter(review => review.business_id == business.id);
  const authors = state.entities.users;
  const photos = Object.values(state.entities.photos).filter(photo => photo.business_id == business.id);;

  return { businessId, business, reviews, authors, photos};
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
