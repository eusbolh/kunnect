import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Box extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className="knc-box-component">
        {
          props.title
            ? <div className="knc-box-title">{props.title}</div>
            : null
        }
        <div className="knc-box-content">
          {props.children}
        </div>
      </div>
    );
  }
}

Box.propTypes = {
  /* Objects */
  children: PropTypes.node,
  title: PropTypes.string,
};

Box.defaultProps = {
  children: null,
  title: null,
};

export default Box;
