import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormTextField extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className="knc-ftxtf-component">
        <label className="knc-ftxtf-label" htmlFor={this.props.name}>
          <div className="knc-ftxtf-input-container">
            <div className="knc-ftxtf-input">
              <input
                id={props.name}
                placeholder={props.placeholder || 'Enter your input'}
                type={props.type}
                value={props.value || ''}
                onBlur={props.handleBlur}
                onChange={props.handleChange}
              />
            </div>
          </div>
        </label>
      </div>
    );
  }
}

FormTextField.propTypes = {
  name: PropTypes.string.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

FormTextField.defaultProps = {
  type: 'text',
};

export default FormTextField;
