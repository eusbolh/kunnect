import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appendClasses } from 'common/common.utils';

class NotificationButton extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className={appendClasses('knc-notification-button-component', props.classes)}>
        {props.children}
      </div>
    );
  }
}

NotificationButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};

NotificationButton.defaultProps = {
  children: null,
  classes: null,
};

export default NotificationButton;
