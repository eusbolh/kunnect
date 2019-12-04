import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class EnsureLoggedIn extends Component {
  componentDidMount = () => {
    const { ...props } = this.props;
    const token = localStorage.getItem('token');
    if (!token) {
      props.history.push('/login');
    } else {
      props.getUserData();
    }
  }

  render() {
    const { ...props } = this.props;
    return props.children;
  }
}

EnsureLoggedIn.propTypes = {
  /* Functions */
  getUserData: PropTypes.func.isRequired,
  /* Objects */
  children: PropTypes.node,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

EnsureLoggedIn.defaultProps = {
  children: null,
};

export default withRouter(EnsureLoggedIn);
