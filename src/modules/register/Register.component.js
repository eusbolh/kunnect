import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KunnectRegister from 'components/auth/register/Register.component';
import { makeCancelable } from 'common/api/Api.helpers';

class Register extends Component {
  state = {
    isWaitingResponse: false,
  };

  createUserPromise = null;

  componentWillUnmount = () => {
    if (this.createUserPromise && this.createUserPromise.cancel) {
      this.createUserPromise.cancel();
    }
  }

  register = (values) => {
    this.setState({ isWaitingResponse: true });
    this.createUserPromise = makeCancelable(this.props.createUser(values));
    this.createUserPromise
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
      <div className="knc-rgstr-module">
        <KunnectRegister
          isWaitingResponse={this.state.isWaitingResponse}
          register={this.register}
        />
      </div>
    );
  }
}

Register.propTypes = {
  /* Functions */
  createUser: PropTypes.func.isRequired,
};

Register.defaultProps = {
};

export default Register;
