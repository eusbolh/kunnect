import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KunnectLogin from 'components/auth/login/Login.component';

class Login extends Component {
  login = (values) => {
    this.props.login(values);
  }

  render() {
    return (
      <div className="knc-login-module">
        <KunnectLogin login={this.login} />
      </div>
    );
  }
}

Login.propTypes = {
  /* Functions */
  login: PropTypes.func.isRequired,
};

Login.defaultProps = {
};

export default Login;
