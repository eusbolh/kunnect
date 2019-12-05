import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  removeNotification,
} from 'common/notifications/Notifications.actions';
import ErrorNotification from './ErrorNotification.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    removeNotification,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorNotification);
