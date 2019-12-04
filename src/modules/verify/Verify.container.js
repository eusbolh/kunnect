import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  verifyMail,
} from 'common/user/User.actions';
import Verify from './Verify.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    verifyMail,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
