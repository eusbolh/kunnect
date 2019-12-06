import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Messages from './Messages.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
