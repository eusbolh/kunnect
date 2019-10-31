import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KunnectLogin from 'components/auth/login/Login.component';

class Login extends Component {
  render() {
    return (
      <div className="knc-login-module">
        <KunnectLogin />
      </div>
    );
  }
}

Login.propTypes = {
};

Login.defaultProps = {
};

export default Login;
