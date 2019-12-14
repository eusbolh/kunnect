import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getKulusterList } from 'modules/kuluster/Kuluster.actions';
import {
  createPost,
} from 'modules/post/Post.actions';
import Topbar from './Topbar.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    createPost,
    getKulusterList,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
