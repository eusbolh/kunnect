import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createComment,
  getPostInfo,
} from 'modules/post/Post.actions';
import KulusterPost from './Kuluster.post.component';

const mapStateToProps = state => ({
  postDetails: state && state.post && state.post.postDetails,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    createComment,
    getPostInfo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(KulusterPost);
