import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { Button } from 'nysa-ui';
import FormTextInput from 'components/forms/FormTextInput';
import Dropdown from 'components/dropdown/Dropdown.component';
import RadioGroup from 'components/radioGroup/RadioGroup.component';

class CreateKuluster extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onConfirm(this.props.values);
  }

  renderRadioItem = (item, index) => {
    return (
      <div className="knc-basic-dialog-radio" key={`knc-create-kuluster-form-radio-${index}`}>
        <input
          checked={this.props.values && this.props.values.kulusterType === item.value}
          id={`knc-create-kuluster-form-${item.value}`}
          onChange={this.props.handleChange}
          name="kulusterType"
          type="radio"
          value={item.value}
        />
        <label htmlFor={`knc-create-kuluster-form-${item.value}`}>
          <div className="knc-basic-dialog-radio-label">
            <div className="knc-basic-dialog-radio-label-checked">
              <div className="knc-basic-dialog-radio-label-checked-content">&nbsp;</div>
            </div>
            <div>{item.label}</div>
          </div>
        </label>
      </div>
    );
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
            <div className="knc-form-section-title">Name</div>
            <div className="knc-form-section-content">
              <div style={{ width: '100%' }}>
                <FormTextInput
                  error={errors.title}
                  name="title"
                  placeholder="Title"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched.title}
                  value={values.title}
                />
              </div>
            </div>
            <div className="knc-form-section-title">Description</div>
            <div className="knc-form-section-content">
              <div style={{ width: '100%' }}>
                <FormTextInput
                  error={errors.content}
                  name="content"
                  placeholder="Text (optional)"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  multiline
                  minLines={4}
                  touched={touched.content}
                  value={values.content}
                />
              </div>
            </div>
            <RadioGroup
              items={[{ label: 'Public', value: 'public' }, { label: 'Private', value: 'private' }]}
              name="kulusterType"
              onChange={this.props.handleChange}
              renderItem={this.renderRadioItem}
              value={this.props.values.kulusterType}
            />
          </div>
          <div className="knc-form-section">
            <div className="knc-form-section-buttons">
              <Button
                intent="primary"
                text="Create Kuluster"
                type="submit"
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

CreateKuluster.propTypes = {
  /* Functions */
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
  /* Objects and Primitives */
  errors: PropTypes.shape({}).isRequired,
  touched: PropTypes.shape({}).isRequired,
  values: PropTypes.shape({}).isRequired,
};

CreateKuluster.defaultProps = {
  onConfirm: () => console.warn('onConfirm() function is not passed.'),
};

const CreateKulusterForm = withFormik({
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

  displayName: 'CreateKuluster', // helps with React DevTools
})(CreateKuluster);

export default CreateKulusterForm;
