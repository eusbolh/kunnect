import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  changePassword,
} from 'common/user/User.actions';
import ResetPassword from './ResetPassword.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changePassword,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
