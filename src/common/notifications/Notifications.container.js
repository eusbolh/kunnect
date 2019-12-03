import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Notifications from './Notifications.component';

const mapStateToProps = state => ({
  notifications: state.notifications && state.notifications.notifications,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
