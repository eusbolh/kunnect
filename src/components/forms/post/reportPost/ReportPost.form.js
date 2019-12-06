import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { Button } from 'nysa-ui';
import FormTextInput from 'components/forms/FormTextInput';
import Dropdown from 'components/dropdown/Dropdown.component';

class CreatePost extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onConfirm(this.props.values);
  }

  render() {
    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
    } = this.props;
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <div className="m-create-post-form">
          <div className="knc-form-section">
            Give us more detail about what is wrong with this post.
            <div className="knc-form-section-content">
              <div style={{ width: '100%' }}>
                <FormTextInput
                  error={errors.content}
                  name="content"
                  placeholder="..."
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  multiline
                  minLines={4}
                  touched={touched.content}
                  value={values.content}
                />
              </div>
            </div>
          </div>
          <div className="knc-form-section">
            <div className="knc-form-section-buttons">
              <Button
                intent="primary"
                text="Report Post"
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

    if (!values.addressLine1) {
      errors.addressLine1 = 'Required!';
    }
    if (!values.city) {
      errors.city = 'Required!';
    }
    if (!values['state-province-region']) {
      errors['state-province-region'] = 'Required!';
    }
    if (!values.country) {
      errors.country = 'Required!';
    }
    if (!values['zip-postal-code']) {
      errors['zip-postal-code'] = 'Required!';
    }
    return errors;
  },

  displayName: 'CreatePost', // helps with React DevTools
})(CreatePost);

export default CreatePostForm;
