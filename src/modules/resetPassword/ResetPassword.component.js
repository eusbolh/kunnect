import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import ResetPasswordForm from 'components/forms/auth/ResetPassword.form';
import { makeCancelable } from 'common/api/Api.helpers';

class ResetPassword extends Component {
  state = {
    isWaitingResponse: false,
    token: null,
  }

  resetPasswordPromise = null;

  componentDidMount = () => {
    const queryStrings = queryString.parse(this.props.location.search);
    if (queryStrings.token) {
      this.setState({ token: queryStrings.token });
    } else {
      this.props.history.push('/forgot-password');
    }
  }

  componentWillUnmount = () => {
    if (this.resetPasswordPromise && this.resetPasswordPromise.cancel) {
      this.resetPasswordPromise.cancel();
    }
  }

  sendPasswordResetLink = (values) => {
    this.setState({ isWaitingResponse: true });
    this.resetPasswordPromise = makeCancelable(this.props.changePassword(values));
    this.resetPasswordPromise
      .promise
      .then((isSucceed) => {
        this.setState({ isWaitingResponse: false });
        if (isSucceed) {
          this.props.history.push('/login');
        }
      })
      .catch(() => null);
  }

  render() {
    return (
      <div className="knc-reset-password-module">
        <div className="knc-reset-password-box --box-shadow-1">
          <div className="knc-reset-password-box-head">
            <div className="knc-reset-password-box-title">Reset Password</div>
            <div className="knc-reset-password-box-description">Enter your new password and username and we will change your password.</div>
          </div>
          <div className="knc-reset-password-box-content">
            {
              this.state.token
                ? (
                  <ResetPasswordForm
                    isWaitingResponse={this.state.isWaitingResponse}
                    onSubmit={this.sendPasswordResetLink}
                    token={this.state.token}
                  />
                ) : null
            }
          </div>
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  /* Functions */
  changePassword: PropTypes.func.isRequired,
  /* Objects */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

ResetPassword.defaultProps = {
};

export default ResetPassword;
