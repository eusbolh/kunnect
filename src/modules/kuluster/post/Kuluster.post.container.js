import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createComment,
  deleteComment,
  getPostInfo,
} from 'modules/post/Post.actions';
import KulusterPost from './Kuluster.post.component';

const mapStateToProps = state => ({
  postDetails: state && state.post && state.post.postDetails,
  userData: state && state.user && state.user.userData,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    createComment,
    deleteComment,
    getPostInfo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(KulusterPost);
