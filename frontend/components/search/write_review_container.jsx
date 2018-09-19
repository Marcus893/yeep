import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
import WriteReview from './write_review';

const mapStateToProps = state => ({
  businesses: asArray(state.entities),
  category: state.ui.filters.category
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(WriteReview);
