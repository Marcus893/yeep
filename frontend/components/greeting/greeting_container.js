import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { updateFilter } from '../../actions/filter_actions';
import { fetchBusinesses } from '../../actions/business_actions';



const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    category: state.ui.filters.category,
    businesses: Object.values(state.entities.businesses)
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchBusinesses: () => dispatch(fetchBusinesses())
});



export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
