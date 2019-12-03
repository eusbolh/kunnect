import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForgotPasswordForm from 'components/forms/auth/ForgotPassword.form';

class ForgotPassword extends Component {
  sendPasswordResetLink = (values) => {
    this.props.forgotPassword(values);
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="knc-forgot-password-module">
        <div className="knc-forgot-password-box --box-shadow-1">
          <div className="knc-forgot-password-box-head">
            <div className="knc-forgot-password-box-title">Forgot Password</div>
            <div className="knc-forgot-password-box-description">Enter your email address and we will send you a password reset link in a couple minutes.</div>
          </div>
          <div className="knc-forgot-password-box-content">
            <ForgotPasswordForm onSubmit={this.sendPasswordResetLink} />
          </div>
        </div>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  /* Functions */
  forgotPassword: PropTypes.func.isRequired,
};

ForgotPassword.defaultProps = {
};

export default ForgotPassword;
