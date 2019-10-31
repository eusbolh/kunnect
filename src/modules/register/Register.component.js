import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KunnectRegister from 'components/auth/register/Register.component';

class Register extends Component {
  render() {
    return (
      <div className="knc-rgstr-module">
        <KunnectRegister />
      </div>
    );
  }
}

Register.propTypes = {
};

Register.defaultProps = {
};

export default Register;
