import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SuccessNotificationContainer from 'components/notifications/success/SuccessNotification.container';
import ErrorNotificationContainer from 'components/notifications/error/ErrorNotification.container';

class Notifications extends Component {
  renderNotification = (notification) => {
    switch (notification.type) {
      case 'create-comment-error':
        return <ErrorNotificationContainer />;
      case 'create-comment-success':
        return <SuccessNotificationContainer />;
      case 'create-kuluster-error':
        return <ErrorNotificationContainer />;
      case 'create-kuluster-success':
        return <SuccessNotificationContainer />;
      case 'create-post-error':
        return <ErrorNotificationContainer />;
      case 'create-post-success':
        return <SuccessNotificationContainer />;
      case 'create-user-error':
        return <ErrorNotificationContainer />;
      case 'create-user-success':
        return <SuccessNotificationContainer />;
      case 'delete-comment-error':
        return <ErrorNotificationContainer />;
      case 'delete-comment-success':
        return <SuccessNotificationContainer />;
      case 'login-error':
        return <ErrorNotificationContainer />;
      case 'verify-error':
        return <ErrorNotificationContainer />;
      case 'verify-success':
        return <SuccessNotificationContainer />;
      default:
        console.warn(`Unknown notification type is given: ${notification.type}`);
        return null;
    }
  }

  renderNotifications = (notifications) => {
    if (notifications && notifications[0]) {
      return this.renderNotification(notifications[0]);
    }
    return null;
  }

  render() {
    const { ...props } = this.props;
    return (
      <div id="root">
        {props.children}
        {this.renderNotifications(props.notifications)}
      </div>
    );
  }
}

Notifications.propTypes = {
  /* Functions */
  /* Objects */
  children: PropTypes.node,
  notifications: PropTypes.arrayOf(PropTypes.shape({})),
};

Notifications.defaultProps = {
  children: null,
  notifications: null,
};

export default Notifications;
