import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Kuluster from './Kuluster.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Kuluster);
