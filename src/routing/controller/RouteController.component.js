import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class RouteController extends Component {
  componentDidUpdate = (prevProps) => {
    const { ...props } = this.props;
    const isLoggingIn = !prevProps.isLoggedIn && props.isLoggedIn;
    const isLoggingOut = prevProps.isLoggedIn && !props.isLoggedIn;

    if (isLoggingIn) {
      props.history.push(props.redirectURL);
    } else if (isLoggingOut) {
      props.history.push('/login');
    }
  }

  render() {
    return this.props.children;
  }
}

RouteController.propTypes = {
  /* Functions */
  /* Objects */
  children: PropTypes.node,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  isLoggedIn: PropTypes.bool,
  redirectURL: PropTypes.string,
};

RouteController.defaultProps = {
  children: null,
  isLoggedIn: false,
  redirectURL: '/',
};

export default withRouter(RouteController);
