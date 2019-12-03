import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  forgotPassword,
} from 'common/user/User.actions';
import ForgotPassword from './ForgotPassword.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    forgotPassword,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
