import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'nysa-ui';

class CommentTextArea extends Component {
  handleInputChange = (event) => {
    const { ...props } = this.props;
    event.target.style.height = 'inherit';
    event.target.style.height = `${Math.min(props.maxLines * 18 + 16, event.target.scrollHeight + 12)}px`; // TODO: Why does it have to be 1.2? Where does it come from?
    props.handleChange(event);
  };

  render = () => {
    const { ...props } = this.props;
    return (
      <div className="knc-comment-text-area-component text--m">
        <label
          className="knc-comment-text-area-label"
          htmlFor={props.name}
        >
          <div className="knc-comment-text-area-container knc-comment-text-area-single">
            <div className="knc-comment-text-area">
              <textarea
                disabled={props.disabled}
                id={props.name}
                onChange={this.handleInputChange}
                placeholder={props.placeholder}
                rows={props.minLines}
                style={{ height: `${props.minLines * 18 + 16}px` }}
                type="text"
                value={props.value}
              />
            </div>
          </div>
        </label>
        <div className="knc-comment-text-area-buttons">
          <div className="knc-comment-text-area-button-container">
            <Button
              classes="knc-comment-text-area-reply-button"
              intent="primary"
              onClick={props.onConfirm}
              text="Reply"
            />
          </div>
          <div className="knc-comment-text-area-button-container">
            <Button
              classes="knc-comment-text-area-cancel-button"
              onClick={props.onCancel}
              text="Cancel"
            />
          </div>
        </div>
      </div>
    );
  }
}

CommentTextArea.propTypes = {
  disabled: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  minLines: PropTypes.number,
  maxLines: PropTypes.number,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
};

CommentTextArea.defaultProps = {
  disabled: false,
  error: null,
  minLines: 4,
  maxLines: 4,
  touched: null,
  value: undefined,
};

export default CommentTextArea;
