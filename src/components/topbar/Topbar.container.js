import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createPost,
} from 'modules/post/Post.actions';
import Topbar from './Topbar.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    createPost,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
