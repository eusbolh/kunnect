import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChangePasswordForm from 'components/forms/auth/ChangePassword.form';

class ResetPassword extends Component {
  sendPasswordResetLink = (values) => {
    this.props.changePassword(values);
    this.props.history.push('/login');
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
            <ChangePasswordForm onSubmit={this.sendPasswordResetLink} />
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
};

ResetPassword.defaultProps = {
};

export default ResetPassword;
