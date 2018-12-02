import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Upload from './upload';
import { fetchBusiness } from '../../actions/business_actions';


const mapStateToProps = state => {

  return {
    businesses: state.entities.businesses
  }
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: (id) => dispatch(fetchBusiness(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Upload));
