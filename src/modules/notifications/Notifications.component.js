import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getNotifications } from './Notifications.config';
import Notification from 'components/notification/Notification.component';

class Notifications extends Component {
  render() {
    return (
      <div className="knc-notifications-module">
        <div className="knc-notifications-content">
          {getNotifications().map(notification => <Notification data={notification} />)}
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
};

Notifications.defaultProps = {
};

export default Notifications;
