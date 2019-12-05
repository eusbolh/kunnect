import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appendClasses } from 'common/common.utils';

class Notification extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className={appendClasses('knc-notification-component', props.classes)}>
        {props.children}
      </div>
    );
  }
}

Notification.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};

Notification.defaultProps = {
  children: null,
  classes: null,
};

export default Notification;
