import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { Button } from 'nysa-ui';
import FormTextInput from 'components/forms/FormTextInput';
import Dropdown from 'components/dropdown/Dropdown.component';
import SuggestBar from 'components/suggestBar/SuggestBar.component';

class CreatePost extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onConfirm(this.props.values);
  }

  handleChange = (name, value) => {
    this.props.setFieldValue(name, value);
  }

  onSuggestBarItemClick = (item) => {
    this.props.setFieldValue('kuluster', item);
  }

  render() {
    const { ...props } = this.props;
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <div className="knc-create-post-form">
          <div className="knc-form-section">
            <div className="knc-form-section-title">Kuluster</div>
            <div className="knc-form-section-content">
              <div style={{ marginBottom: '12px', width: '100%' }}>
                <SuggestBar
                  onClick={this.onSuggestBarItemClick}
                  suggest={props.kulusterList}
                />
              </div>
            </div>
            <div className="knc-form-section-title">Title</div>
            <div className="knc-form-section-content">
              <div style={{ width: '100%' }}>
                <FormTextInput
                  error={props.errors.title}
                  name="title"
                  placeholder="Title"
                  handleBlur={props.handleBlur}
                  handleChange={props.handleChange}
                  touched={props.touched.title}
                  value={props.values.title}
                />
              </div>
            </div>
            <div className="knc-form-section-title">Content</div>
            <div className="knc-form-section-content">
              <div style={{ width: '100%' }}>
                <FormTextInput
                  error={props.errors.content}
                  name="content"
                  placeholder="Text (optional)"
                  handleBlur={props.handleBlur}
                  handleChange={props.handleChange}
                  multiline
                  minLines={4}
                  touched={props.touched.content}
                  value={props.values.content}
                />
              </div>
            </div>
          </div>
          <div className="knc-form-section">
            <div className="knc-form-section-buttons">
              <Button
                disabled={!(props.values && props.values.content && props.values.kuluster && props.values.title)}
                intent="primary"
                text="Create Post"
                type="submit"
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

CreatePost.propTypes = {
  /* Functions */
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
  setFieldValue: PropTypes.func.isRequired,
  /* Objects and Primitives */
  errors: PropTypes.shape({}).isRequired,
  touched: PropTypes.shape({}).isRequired,
  values: PropTypes.shape({}).isRequired,
};

CreatePost.defaultProps = {
  onConfirm: () => console.warn('onConfirm() function is not passed.'),
};

const CreatePostForm = withFormik({
  // Custom sync validation
  validate: (values) => {
    const errors = {};

    if (!values.content) {
      errors.content = 'Required!';
    }
    if (!values.kuluster) {
      errors.kuluster = 'Required!';
    }
    if (!values.title) {
      errors.title = 'Required!';
    }
    return errors;
  },

  displayName: 'CreatePost', // helps with React DevTools
})(CreatePost);

export default CreatePostForm;
