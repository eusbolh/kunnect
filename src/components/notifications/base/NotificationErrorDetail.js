import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appendClasses } from 'common/common.utils';

class NotificationErrorDetail extends Component {
  renderErrors = (errors) => {
    if (errors) {
      return Object.keys(errors).map((errorCategory, index) => (
        <div className="knc-notification-error" key={`knc-notification-error-${index}`}>
          <div className="knc-notification-error-title">{errorCategory}</div>
          <ul className="knc-notification-error-list">
            {Array.isArray(errors[errorCategory])
              ? errors[errorCategory].map(error => <li className="knc-notification-error-list-element" key={`knc-notification-error-list-element-${index}`}>{error}</li>)
              : <li>{errors[errorCategory]}</li>
            }
          </ul>
        </div>
      ));
    }
    return null;
  }

  render() {
    const { ...props } = this.props;
    return (
      <div className={appendClasses('knc-notification-error-detail-component', props.classes)}>
        {this.renderErrors(props.errors)}
      </div>
    );
  }
}

NotificationErrorDetail.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  errors: PropTypes.shape({}),
};

NotificationErrorDetail.defaultProps = {
  children: null,
  classes: null,
  errors: null,
};

export default NotificationErrorDetail;
