import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { Button, Link } from 'nysa-ui';
import FormTextInput from '../FormTextInput';

class ResetPassword extends Component {
  handleSubmit = (e) => {
    const { ...props } = this.props;
    e.preventDefault(); // TODO: Why do we do this?
    props.onSubmit(props.values);
  }

  render() {
    const { ...props } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="knc-form-section">
          <div className="knc-form-section-title">Your New Password</div>
          <div className="knc-form-section-content">
            <div style={{ width: '100%' }}>
              <FormTextInput
                error={props.errors.password}
                name="password"
                placeholder="Your new password"
                handleBlur={props.handleBlur}
                handleChange={props.handleChange}
                touched={props.touched.password}
                type="password"
                value={props.values.password}
              />
            </div>
          </div>
        </div>
        <div className="knc-form-section">
          <div className="knc-form-section-title">Your Username</div>
          <div className="knc-form-section-content">
            <div style={{ width: '100%' }}>
              <FormTextInput
                error={props.errors.username}
                name="username"
                placeholder="Your username"
                handleBlur={props.handleBlur}
                handleChange={props.handleChange}
                touched={props.touched.username}
                value={props.values.username}
              />
            </div>
          </div>
        </div>
        <div className="knc-form-buttons">
          <Button
            disabled={!(props.values && props.values.username && props.values.password) || Object.keys(props.errors).length !== 0}
            intent="primary"
            text="Send reset password link"
            type="submit"
          />
        </div>
      </form>
    );
  }
}

ResetPassword.propTypes = {
  /* Functions */
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  /* Objects */
  errors: PropTypes.shape({}).isRequired,
  touched: PropTypes.shape({}).isRequired,
  values: PropTypes.shape({}).isRequired,
};

ResetPassword.defaultProps = {
};

const ResetPasswordForm = withFormik({
  validate: (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.password) {
      errors.password = 'New password is required!';
    }
    return errors;
  },
  displayName: 'ResetPasswordForm',
})(ResetPassword);

export default withRouter(ResetPasswordForm);
