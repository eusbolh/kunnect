import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appendClasses } from 'common/common.utils';

class NotificationContent extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className={appendClasses('knc-notification-content-component', props.classes)}>
        {props.children}
      </div>
    );
  }
}

NotificationContent.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};

NotificationContent.defaultProps = {
  children: null,
  classes: null,
};

export default NotificationContent;
