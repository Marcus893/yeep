import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import { selectReviewsForBusiness, selectBusiness } from '../../reducers/selectors';
import BusinessShow from './business_show';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, { match }) => {
  debugger
  const businessId = parseInt(match.params.businessId);
  const business = selectBusiness(state.entities, businessId);
  const reviews = selectReviewsForBusiness(state.entities, business);
  const authors = state.entities.users;
  const photos = state.entities.photos;
  return { businessId, business, reviews, authors, photos};
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
