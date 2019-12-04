import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createKuluster,
} from 'modules/kuluster/Kuluster.actions';
import Feed from './Feed.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    createKuluster,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
