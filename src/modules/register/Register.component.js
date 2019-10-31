import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KunnectRegister from 'components/auth/register/Register.component';

class Register extends Component {
  register = (values) => {
    console.log(values);
    alert(`Submitted values are: ${values.username}, ${values.email}, ${values.password}`);
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="knc-rgstr-module">
        <KunnectRegister register={this.register} />
      </div>
    );
  }
}

Register.propTypes = {
};

Register.defaultProps = {
};

export default Register;
