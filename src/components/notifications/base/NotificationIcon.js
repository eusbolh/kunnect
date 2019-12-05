import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appendClasses } from 'common/common.utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NotificationIcon extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className={appendClasses('knc-notification-icon-component', props.classes)}>
        <FontAwesomeIcon className="--success" icon={['fas', 'check-circle']} />
      </div>
    );
  }
}

NotificationIcon.propTypes = {
  classes: PropTypes.string,
  icon: PropTypes.string,
  intent: PropTypes.string,
};

NotificationIcon.defaultProps = {
  classes: null,
  icon: null,
  intent: null,
};

export default NotificationIcon;
