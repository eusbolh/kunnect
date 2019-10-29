import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthBase from 'components/auth/base/AuthBase.component';

class Login extends Component {
  render() {
    return (
      <div className="knc-login-module">
        <AuthBase>hello</AuthBase>
      </div>
    );
  }
}

Login.propTypes = {
};

Login.defaultProps = {
};

export default Login;
