import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createComment,
  deleteComment,
} from 'modules/post/Post.actions';
import PostDialog from './PostDialog.component';

const mapStateToProps = state => ({
  userData: state && state.user && state.user.userData,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    createComment,
    deleteComment,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PostDialog);
