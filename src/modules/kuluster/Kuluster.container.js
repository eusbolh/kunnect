import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getKulusterInfo,
} from 'modules/kuluster/Kuluster.actions';
import {
  updateSelectedMenu,
} from 'common/redux/common.actions';
import Kuluster from './Kuluster.component';

const mapStateToProps = state => ({
  kulusterInfo: state && state.kulusters && state.kulusters.kulusterInfo,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getKulusterInfo,
    updateSelectedMenu,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Kuluster);
