import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KunnectLogin from 'components/auth/login/Login.component';
import { makeCancelable } from 'common/api/Api.helpers';

class Login extends Component {
  state = {
    isWaitingResponse: false,
  };

  loginRequestPromise = null;

  componentWillUnmount = () => {
    if (this.loginRequestPromise && this.loginRequestPromise.cancel) {
      this.loginRequestPromise.cancel();
    }
  }

  login = (values) => {
    this.setState({ isWaitingResponse: true });
    this.loginRequestPromise = makeCancelable(this.props.login(values));
    this.loginRequestPromise
      .promise
      .then(() => this.setState({ isWaitingResponse: false }))
      .catch(() => null);
  }

  render() {
    return (
      <div className="knc-login-module">
        <KunnectLogin
          isWaitingResponse={this.state.isWaitingResponse}
          login={this.login}
        />
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
