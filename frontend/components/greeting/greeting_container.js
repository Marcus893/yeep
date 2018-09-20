import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { updateFilter } from '../../actions/filter_actions';



const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    category: state.ui.filters.category
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});



export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
