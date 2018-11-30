import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import { selectReviewsForBusiness, selectBusiness } from '../../reducers/selectors';
import BusinessShow from './business_show';
import { updateFilter } from '../../actions/filter_actions';
import { fetchAllUsers } from '../../actions/session_actions';

const mapStateToProps = (state, { match }) => {

  const businessId = parseInt(match.params.businessId);
  const business = selectBusiness(state.entities, businessId);
  const reviews = Object.values(state.entities.reviews).filter(review => review.business_id == business.id);
  const users = state.entities.users;
  const photos = Object.values(state.entities.photos).filter(photo => photo.business_id == business.id);
  return { businessId, business, reviews, users, photos};
};

const mapDispatchToProps = dispatch => {

  return { fetchBusiness: id => dispatch(fetchBusiness(id)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchAllUsers: () => dispatch(fetchAllUsers())
}

};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
