import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@blueprintjs/core';
import { Suggest } from '@blueprintjs/select';

const keys = [
  '88a969ec1142e205af007bf7642c1118',
  'n5pk1qtd4y18xygpxtcp3q3lzdxzpsnc',
];

class SuggestBar extends Component {
  state = {
    query: '',
  }

  handleItemSelect = (item) => {
    this.setState({ query: item });
    this.props.onClick(item);
  }

  handleQueryChange = (query) => {
    this.setState({ query });
  }

  getItemList = () => {
    if (this.props.suggest) {
      return this.props.suggest && this.props.suggest.filter(item => item.toLowerCase().includes(this.state.query.toLowerCase()));
    }
    return [];
  }

  getMode = (key) => {
    if (key === keys[0]) {
      return 1;
    }
    return 2;
  }

  renderItemValue = item => (item.Name)

  renderItem = (item, { modifiers, handleClick }) => (
    <MenuItem
      active={modifiers.active}
      className="knc-suggestbar-item"
      onClick={handleClick}
      key={item}
      label={`k/${item}`}
      text={item}
    />
  );

  render() {
    return (
      <div className="knc-suggestbar">
        <Suggest
          onItemSelect={this.handleItemSelect}
          onQueryChange={this.handleQueryChange}
          inputValueRenderer={this.renderItemValue}
          itemRenderer={this.renderItem}
          items={this.getItemList()}
          noResults={<MenuItem disabled={true} text="No results." />}
          popoverProps={{
            minimal: true,
            modifiers: {
              arrow: { enabled: false },
              computeStyle: { gpuAcceleration: false },
            },
          }}
        />
      </div>
    );
  }
}

SuggestBar.propTypes = {
  /* Functions */
  onClick: PropTypes.func.isRequired,
  /* Objects */
  suggest: PropTypes.arrayOf(PropTypes.string),
};

SuggestBar.defaultProps = {
  suggest: null,
};

export default SuggestBar;
