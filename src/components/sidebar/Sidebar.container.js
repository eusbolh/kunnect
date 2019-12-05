import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateSelectedMenu,
} from 'common/redux/common.actions';
import Sidebar from './Sidebar.component';

const mapStateToProps = state => ({
  selectedMenu: state && state.common && state.common.selectedMenu,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateSelectedMenu,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
