import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RouteController from './RouteController.component';

const mapStateToProps = state => ({
  isLoggedIn: state.login && state.login.isLoggedIn,
  redirectURL: state.login && state.login.redirectURL,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RouteController);
