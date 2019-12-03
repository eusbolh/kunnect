import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { Button, Link } from 'nysa-ui';
import FormTextInput from '../FormTextInput';

class Login extends Component {
  handleSubmit = (e) => {
    const { ...props } = this.props;
    e.preventDefault(); // TODO: Why do we do this?
    props.onSubmit(props.values);
  }

  render() {
    const { ...props } = this.props;
    return (
      <form className="knc-login-form" onSubmit={this.handleSubmit}>
        <FormTextInput
          error={props.errors.username}
          name="username"
          placeholder="Username"
          handleBlur={props.handleBlur}
          handleChange={props.handleChange}
          touched={props.touched.username}
          value={props.values.username || ''}
        />
        <div className="knc-login-form-password-section">
          <div className="knc-login-form-forgot-password">
            <Link
              classes="knc-authb-redirect-text"
              href="forgot-password"
              intent="primary"
              onClick={() => props.history.push('/forgot-password')}
              text="Forgot password?"
            >
              {props.redirectText}
            </Link>
          </div>
          <div className="knc-login-form-password-input">
            <FormTextInput
              error={props.errors.password}
              name="password"
              placeholder="Password"
              handleBlur={props.handleBlur}
              handleChange={props.handleChange}
              touched={props.touched.password}
              type="password"
              value={props.values.password || ''}
            />
          </div>
        </div>
        <div className="knc-form-buttons">
          <Button
            intent="primary"
            loading={props.isWaitingResponse}
            text="Sign In"
            type="submit"
          />
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  /* Functions */
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  /* Objects */
  errors: PropTypes.shape({}).isRequired,
  isWaitingResponse: PropTypes.bool,
  touched: PropTypes.shape({}).isRequired,
  values: PropTypes.shape({}).isRequired,
};

Login.defaultProps = {
  isWaitingResponse: false,
};

const LoginForm = withFormik({
  validate: (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    }
    return errors;
  },
  displayName: 'LoginForm',
})(Login);

export default withRouter(LoginForm);
