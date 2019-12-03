import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { Button, Link } from 'nysa-ui';
import FormTextInput from '../FormTextInput';

class ForgotPassword extends Component {
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
          <div className="knc-form-section-title">Your Email Address</div>
          <div className="knc-form-section-content">
            <div style={{ width: '100%' }}>
              <FormTextInput
                error={props.errors.email}
                name="email"
                placeholder="Your email address"
                handleBlur={props.handleBlur}
                handleChange={props.handleChange}
                touched={props.touched.email}
                value={props.values.email}
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
          <Button intent="primary" text="Send reset password link" type="submit" />
        </div>
      </form>
    );
  }
}

ForgotPassword.propTypes = {
  /* Functions */
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  /* Objects */
  errors: PropTypes.shape({}).isRequired,
  touched: PropTypes.shape({}).isRequired,
  values: PropTypes.shape({}).isRequired,
};

ForgotPassword.defaultProps = {
};

const ForgotPasswordForm = withFormik({
  validate: (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },
  displayName: 'LoginForm',
})(ForgotPassword);

export default withRouter(ForgotPasswordForm);
