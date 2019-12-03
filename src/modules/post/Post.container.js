import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Post from './Post.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Post);
