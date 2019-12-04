import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { makeCancelable } from 'common/api/Api.helpers';

class Verify extends Component {
  state = {
    isFailed: false,
    isWaitingResponse: false,
    token: null,
  }

  verifyMailPromise = null;

  componentDidMount = () => {
    const queryStrings = queryString.parse(this.props.location.search);
    if (queryStrings.token) {
      this.setState({ token: queryStrings.token });
      this.verifyMail(queryStrings.token);
    } else {
      this.props.history.push('/register');
    }
  }

  componentWillUnmount = () => {
    if (this.verifyMailPromise && this.verifyMailPromise.cancel) {
      this.verifyMailPromise.cancel();
    }
  }

  verifyMail = (token) => {
    this.setState({ isWaitingResponse: true });
    this.verifyMailPromise = makeCancelable(this.props.verifyMail({ token }));
    this.verifyMailPromise
      .promise
      .then((isSucceed) => {
        this.setState({ isWaitingResponse: false });
        if (isSucceed) {
          this.props.history.push('/login');
        } else {
          this.setState({ isFailed: true });
        }
      })
      .catch(() => null);
  };

  render() {
    return (
      <div className="knc-verify-module">
        <div className="knc-verify-box --box-shadow-1">
          {this.state.isFailed ? 'Mail verification failed!' : 'Verifying your mail..'}
        </div>
      </div>
    );
  }
}

Verify.propTypes = {
  /* Functions */
  verifyMail: PropTypes.func.isRequired,
  /* Objects */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

Verify.defaultProps = {
};

export default Verify;
