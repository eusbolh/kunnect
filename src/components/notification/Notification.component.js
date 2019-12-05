import React, { Component } from 'react';
import PropTypes from 'prop-types';
import brandLogo from 'common/assets/logo_white.png';

class Notification extends Component {
  getNotification = notification => notification && notification.content;

  getTimestamp = notification => notification && notification.timestamp;

  getType = notification => notification && notification.type;

  renderNotificationImage = (type) => {
    switch (type) {
      case 'comment':
        return (
          <div className="knc-app-notification-image-container knc-app-notification-image-container--blue">
            <img alt="brand" className="knc-app-notification-image" src={brandLogo} />
          </div>
        );
      case 'report':
        return (
          <div className="knc-app-notification-image-container knc-app-notification-image-container--red">
            <img alt="brand" className="knc-app-notification-image" src={brandLogo} />
          </div>
        );
      case 'vote':
        return (
          <div className="knc-app-notification-image-container knc-app-notification-image-container--gold">
            <img alt="brand" className="knc-app-notification-image" src={brandLogo} />
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    const { ...props } = this.props;
    console.log(props.data);
    return (
      <div className="knc-app-notification-component">
        <div className="knc-app-notification-image-container">{this.renderNotificationImage(this.getType(props.data))}</div>
        <div className="knc-app-notification-content">
          <div className="knc-app-notification-timestamp">{this.getTimestamp(props.data)}</div>
          <div className="knc-app-notification-text">{this.getNotification(props.data)}</div>
        </div>
      </div>
    );
  }
}

Notification.propTypes = {
  /* Objects */
  data: PropTypes.shape({}),
};

Notification.defaultProps = {
  data: null,
};

export default Notification;
