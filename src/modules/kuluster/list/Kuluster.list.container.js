import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import KulusterList from './Kuluster.list.component';

const mapStateToProps = state => ({
  kulusterInfo: state && state.kulusters && state.kulusters.kulusterInfo,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(KulusterList);
