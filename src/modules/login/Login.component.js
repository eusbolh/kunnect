import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KunnectLogin from 'components/auth/login/Login.component';

class Login extends Component {
  login = (values) => {
    console.log('Submitted values are: ', values);
    this.props.history.push('/');
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
};

Login.defaultProps = {
};

export default Login;
