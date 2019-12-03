import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Radio,
  RadioGroup as RadioGroupBP,
} from '@blueprintjs/core';
import {
  handleStringChange,
} from '@blueprintjs/docs-theme';

class RadioGroup extends Component {
  render() {
    const { ...props } = this.props;
    if (props.renderItem) {
      return (
        <div className="knc-radio-group-component">
          {
            props.items
              ? props.items.map((item, index) => props.renderItem(item, index))
              : null
          }
        </div>
      );
    }
    return (
      <div className="knc-radio-group-component">
        <RadioGroupBP
          inline={true}
          onChange={handleStringChange(value => this.props.onChange(value))}
          selectedValue={props.value}
        >
          {
            props.items
              ? props.items.map((item, index) => <Radio key={`knc-radio-group-component-${props.key}-${index}`} label={item.label} value={item.value} />)
              : null
          }
        </RadioGroupBP>
      </div>
    );
  }
}

RadioGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  renderItem: PropTypes.func,
  value: PropTypes.string.isRequired,
};

RadioGroup.defaultProps = {
  renderItem: null,
};

export default RadioGroup;
