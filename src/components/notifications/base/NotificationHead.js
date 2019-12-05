import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appendClasses } from 'common/common.utils';

class NotificationHead extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className={appendClasses('knc-notification-head-component', props.classes)}>
        {props.children}
      </div>
    );
  }
}

NotificationHead.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};

NotificationHead.defaultProps = {
  children: null,
  classes: null,
};

export default NotificationHead;
