import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import FormTextField from '../FormTextField.component';

class Login extends Component {
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
          placeholder="Username"
          handleBlur={props.handleBlur}
          handleChange={props.handleChange}
          touched={props.touched.username}
          value={props.values.username}
        />
        <FormTextField
          error={props.errors.password}
          name="password"
          placeholder="Password"
          handleBlur={props.handleBlur}
          handleChange={props.handleChange}
          touched={props.touched.password}
          type="password"
          value={props.values.password}
        />
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
  touched: PropTypes.shape({}).isRequired,
  values: PropTypes.shape({}).isRequired,
};

Login.defaultProps = {
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

export default LoginForm;
