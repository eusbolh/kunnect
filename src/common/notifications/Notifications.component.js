import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notifications extends Component {
  renderNotification = (notification) => {
    switch (notification.type) {
      case 'login-error':
        console.log(notification);
        return null;
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