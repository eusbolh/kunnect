import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthBase from '../base/AuthBase.component';

class Login extends Component {
  render() {
    return (
      <div>
        <AuthBase
          brandLogoBackgroundColor="#669EFF"
          formTitle="Good evening!"
          formSubtitle="It's good to see you back!"
          redirectQuestion="Don't you have a kunnect account?"
          redirectText="Sign up!"
        >
          [login_form]
        </AuthBase>
      </div>
    );
  }
}

Login.propTypes = {
};

Login.defaultProps = {
};

export default Login;
