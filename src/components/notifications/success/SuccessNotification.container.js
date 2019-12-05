import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  removeNotification,
} from 'common/notifications/Notifications.actions';
import SuccessNotification from './SuccessNotification.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    removeNotification,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SuccessNotification);
