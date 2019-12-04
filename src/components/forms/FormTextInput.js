import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FormTextInput extends Component {
  handleInputChange = (event) => {
    const { ...props } = this.props;
    event.target.style.height = 'inherit';
    event.target.style.height = `${Math.min(props.maxLines * 16 + 16, event.target.scrollHeight + 2)}px`; // TODO: Why does it have to be 1.2? Where does it come from?
    props.handleChange(event);
  };

  render = () => {
    const { ...props } = this.props;
    return (
      <div className="knc-form-text-input-component text--m">
        <label
          className="knc-form-text-input-label"
          htmlFor={props.name}
        >
          <div className="knc-form-text-input-container knc-form-text-input-single">
            <div className={`knc-form-text-input${props.error && props.touched ? ' knc-form-text-input--error' : ''}`}>
              {
                props.multiline
                  ? (
                    <textarea
                      disabled={props.disabled}
                      id={props.name}
                      onChange={this.handleInputChange}
                      placeholder={props.placeholder}
                      rows={props.minLines}
                      style={{ height: `${props.minLines * 16 + 16}px` }}
                      type={props.type}
                      value={props.value}
                    />
                  ) : (
                    <input
                      disabled={props.disabled}
                      id={props.name}
                      placeholder={props.placeholder || 'Enter preset name'}
                      onBlur={props.handleBlur}
                      onChange={props.handleChange}
                      type={props.type}
                      value={props.value || ''}
                    />
                  )
              }
            </div>
            {
              props.error && props.touched
                ? (
                  <div className="knc-form-text-input-icon knc-form-text-input-icon--error">
                    <FontAwesomeIcon icon={['fas', 'times']} />
                  </div>
                ) : null
            }
            {
              !props.error && props.touched
                ? (
                  <div className="knc-form-text-input-icon knc-form-text-input-icon--success">
                    <FontAwesomeIcon icon={['fas', 'check']} />
                  </div>
                ) : null
            }
            <div className="knc-form-text-input-error">
              {props.error && props.touched
                ? (
                  <div className="knc-form-text-error">
                    {props.error}
                  </div>
                ) : null
              }
            </div>
          </div>
        </label>
      </div>
    );
  }
}

FormTextInput.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  minLines: PropTypes.number,
  maxLines: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

FormTextInput.defaultProps = {
  disabled: false,
  error: null,
  minLines: 4,
  maxLines: 4,
  touched: null,
  type: 'text',
  value: undefined,
};

export default FormTextInput;
