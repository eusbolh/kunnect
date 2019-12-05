import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateSelectedMenu,
} from 'common/redux/common.actions';
import Kuluster from './Kuluster.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateSelectedMenu,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Kuluster);
