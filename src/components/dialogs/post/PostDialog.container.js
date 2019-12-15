import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createComment,
} from 'modules/post/Post.actions';
import PostDialog from './PostDialog.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    createComment,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PostDialog);
