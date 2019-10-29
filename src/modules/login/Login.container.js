import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
