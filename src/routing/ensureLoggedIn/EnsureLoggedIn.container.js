import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateRedirectURL,
} from 'common/auth/auth.actions';
import EnsureLoggedIn from './EnsureLoggedIn.component';

const mapStateToProps = (state, ownProps) => ({
  currentURL: ownProps.location.pathname,
  login: state.login,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateRedirectURL,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EnsureLoggedIn);
