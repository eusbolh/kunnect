import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import KulusterPost from './Kuluster.post.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(KulusterPost);
