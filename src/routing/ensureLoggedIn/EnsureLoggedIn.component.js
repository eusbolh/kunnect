import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isTokenExpired } from 'common/auth/auth.utils';

class EnsureLoggedIn extends Component {
  componentDidMount = () => {
    const { ...props } = this.props;
    /* TODO: Comment out this block when API is implemented.
    if (isTokenExpired()) {
      props.updateRedirectURL(props.currentURL);
      props.history.push('/login');
    } else {
      props.getUserData();
    }
    */
  }

  render() {
    const { ...props } = this.props;
    return props.children; // TODO: remove this line when API is implemented.
    if (props.login && props.login.isLoggedIn && !isTokenExpired()) {
      return props.children;
    }
    if (props.login && props.login.isAuthFailed) {
      return (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      );
    }
    return null;
  }
}

EnsureLoggedIn.propTypes = {
  /* Functions */
  getUserData: PropTypes.func.isRequired,
  updateRedirectURL: PropTypes.func.isRequired,
  /* Objects */
  children: PropTypes.node,
  currentURL: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.shape({
    isAuthFailed: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
  }),
};

EnsureLoggedIn.defaultProps = {
  children: null,
  login: null,
};

export default withRouter(EnsureLoggedIn);
