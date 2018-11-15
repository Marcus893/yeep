import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import WriteReview from './write_review';
import { fetchBusinesses } from '../../actions/business_actions';

const mapStateToProps = state => ({
  category: state.ui.filters.category,
  businesses: Object.values(state.entities.businesses)
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(mapStateToProps, mapDispatchToProps)(WriteReview);
