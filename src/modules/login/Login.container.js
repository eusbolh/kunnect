import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  login,
} from 'common/user/User.actions';
import Login from './Login.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    login,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
