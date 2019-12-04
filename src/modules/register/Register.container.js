import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createUser,
} from 'common/user/User.actions';
import Register from './Register.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    createUser,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
