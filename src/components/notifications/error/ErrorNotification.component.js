import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dialog } from '@blueprintjs/core';
import Notification from 'components/notifications/base/Notification';
import NotificationContent from 'components/notifications/base/NotificationContent';
import NotificationHead from 'components/notifications/base/NotificationHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ErrorNotification extends Component {
  state = {
    isDialogOpen: true,
  }

  onButtonClick = () => {
    this.props.removeNotification();
  }

  render() {
    return (
      <Dialog
        isOpen={this.state.isDialogOpen}
        onClose={() => this.props.removeNotification()}
      >
        <Notification>
          <div className="knc-notification-icon-component">
            <FontAwesomeIcon className="--error" icon={['fas', 'exclamation-circle']} />
          </div>
          <NotificationHead>Error</NotificationHead>
          <NotificationContent>An error has occured while processing your request. Please try again.</NotificationContent>
        </Notification>
      </Dialog>
    );
  }
}

ErrorNotification.propTypes = {
  /* Functions */
  removeNotification: PropTypes.func.isRequired,
  /* Objects */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

ErrorNotification.defaultProps = {
};

export default withRouter(ErrorNotification);
