import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dialog } from '@blueprintjs/core';
import Notification from 'components/notifications/base/Notification';
import NotificationContent from 'components/notifications/base/NotificationContent';
import NotificationHead from 'components/notifications/base/NotificationHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SuccessNotification extends Component {
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
            <FontAwesomeIcon className="--success" icon={['fas', 'check-circle']} />
          </div>
          <NotificationHead>Success</NotificationHead>
          <NotificationContent>Your action is successfully completed. Now, you may continue to use the application.</NotificationContent>
        </Notification>
      </Dialog>
    );
  }
}

SuccessNotification.propTypes = {
  /* Functions */
  removeNotification: PropTypes.func.isRequired,
  /* Objects */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

SuccessNotification.defaultProps = {
};

export default withRouter(SuccessNotification);
