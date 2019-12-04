import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegisterForm from 'components/forms/auth/Register.form';
import AuthBase from '../base/AuthBase.component';

class Register extends Component {
  onSubmit = (values) => {
    this.props.register(values);
  }

  render() {
    return (
      <div>
        <AuthBase
          brandLogoBackgroundColor="#15B371"
          formTitle="Get started!"
          formSubtitle="Sign up kunnect for free."
          redirectQuestion="Do you already have a kunnect account?"
          redirectText="Sign in!"
          redirectURL="/login"
        >
          <RegisterForm
            isWaitingResponse={this.props.isWaitingResponse}
            onSubmit={this.onSubmit}
          />
        </AuthBase>
      </div>
    );
  }
}

Register.propTypes = {
  /* Functions */
  register: PropTypes.func.isRequired,
  /* Objects */
  isWaitingResponse: PropTypes.bool,
};

Register.defaultProps = {
  isWaitingResponse: false,
};

export default Register;
