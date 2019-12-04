import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getUserData,
} from 'common/user/User.actions';
import EnsureLoggedIn from './EnsureLoggedIn.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getUserData,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EnsureLoggedIn);
