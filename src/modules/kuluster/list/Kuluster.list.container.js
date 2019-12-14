import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getKulusterInfo,
} from 'modules/kuluster/Kuluster.actions';
import KulusterList from './Kuluster.list.component';

const mapStateToProps = state => ({
  kulusterInfo: state && state.kulusters && state.kulusters.kulusterInfo,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getKulusterInfo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(KulusterList);
