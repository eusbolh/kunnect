import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { Button } from 'nysa-ui';
import FormTextField from '../FormTextField.component';

class Register extends Component {
  handleSubmit = (e) => {
    const { ...props } = this.props;
    e.preventDefault(); // TODO: Why do we do this?
    props.onSubmit(props.values);
  }

  render() {
    const { ...props } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormTextField
          error={props.errors.username}
          name="username"
          placeholder="Choose your username"
          handleBlur={props.handleBlur}
          handleChange={props.handleChange}
          touched={props.touched.username}
          value={props.values.username || ''}
        />
        <FormTextField
          error={props.errors.email}
          name="email"
          placeholder="Enter your email"
          handleBlur={props.handleBlur}
          handleChange={props.handleChange}
          touched={props.touched.email}
          value={props.values.email || ''}
        />
        <FormTextField
          error={props.errors.password}
          name="password"
          placeholder="Enter your password"
          handleBlur={props.handleBlur}
          handleChange={props.handleChange}
          touched={props.touched.password}
          type="password"
          value={props.values.password || ''}
        />
        <div className="knc-form-buttons">
          <Button
            intent="success"
            loading={this.props.isWaitingResponse}
            text="Sign Up"
            type="submit"
          />
        </div>
      </form>
    );
  }
}

Register.propTypes = {
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

Register.defaultProps = {
  isWaitingResponse: false,
};

const RegisterForm = withFormik({
  validate: (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    }
    return errors;
  },
  displayName: 'RegisterForm',
})(Register);

export default RegisterForm;
