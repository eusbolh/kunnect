import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appendClasses } from 'common/common.utils';

class AuthBase extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className={appendClasses('knc-authb-component', props.classes)}>
        <div className="knc-authb-left"></div>
        <div className="knc-authb-right">{props.children}</div>
      </div>
    );
  }
}

AuthBase.propTypes = {
  /* Objects */
  children: PropTypes.node,
  classes: PropTypes.string,
};

AuthBase.defaultProps = {
  children: null,
  classes: null,
};

export default AuthBase;
