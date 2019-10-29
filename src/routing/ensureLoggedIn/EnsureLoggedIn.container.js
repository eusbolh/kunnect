import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EnsureLoggedIn from './EnsureLoggedIn.component';

const mapStateToProps = (state, ownProps) => ({
  currentURL: ownProps.location.pathname,
  login: state.login,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EnsureLoggedIn);
