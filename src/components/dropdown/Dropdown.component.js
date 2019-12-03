import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Popover } from '@blueprintjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'nysa-ui';

class Drodown extends Component {
  state = {
    isDropdownMenuOpen: false,
    selectedMenuItem: null,
  }

  renderPopoverContent = () => (
    <div className="knc-dropdown-popover">
      {this.props.options.map(option => this.renderPopoverMenuItem(option))}
    </div>
  )

  renderPopoverMenuItem = item => (
    <Button
      classes="knc-dropdown-popover-menu-item-button"
      key={`knc-dropdown-popover-menu-item-button-${item}`}
      onClick={() => this.setState({ isDropdownMenuOpen: false, selectedMenuItem: item })}
    >
      <div className="knc-dropdown-popover-menu-item-button-is-selected">
        {
          this.state.selectedMenuItem === item
            ? <FontAwesomeIcon icon={['fas', 'check']} />
            : null
        }
      </div>
      <div className="knc-dropdown-popover-menu-item-button-text">{item}</div>
    </Button>
  )

  onPopoverInteraction = (nextOpenState) => {
    if (!nextOpenState) {
      this.setState({ isDropdownMenuOpen: false });
    }
  }

  render() {
    const modifiers = { arrow: { enabled: false } };
    return (
      <div className="knc-dropdown-component">
        <Popover
          content={this.renderPopoverContent()}
          isOpen={this.state.isDropdownMenuOpen}
          modifers={modifiers}
          onInteraction={this.onPopoverInteraction}
          position="bottom-left"
        >
          <Button
            classes="knc-dropdown-button"
            onClick={() => this.setState({ isDropdownMenuOpen: true })}
          >
            <div className="knc-dropdown-button-value">
              {
                this.state.selectedMenuItem
                  ? <div className="knc-dropdown-button-value-selected">{this.state.selectedMenuItem}</div>
                  : <div className="knc-dropdown-button-value-unselected">Select item</div>
              }
            </div>
            <div className="knc-dropdown-button-icon">
              <FontAwesomeIcon icon={['fas', 'chevron-down']} />
            </div>
          </Button>
        </Popover>
      </div>
    );
  }
}

Drodown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

Drodown.defaultProps = {
  options: [],
};

export default Drodown;
