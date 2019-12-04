import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Button } from 'nysa-ui';
import { Dialog } from '@blueprintjs/core';

class BasicDialog extends Component {
  onClose = () => {
    this.props.onClose();
  }

  render() {
    const { ...props } = this.props;
    return (
      <Dialog
        className="knc-basic-dialog-component"
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <div className="knc-basic-dialog-container">
          <div className="knc-basic-dialog-head">
            <div className="knc-basic-dialog-head-left-side">
              <div className="knc-basic-dialog-head-title">{props.title}</div>
            </div>
            <div className="knc-basic-dialog-head-right-side">
              <div className="knc-basic-dialog-head-right-side-close-button-container">
                <Button
                  classes="knc-basic-dialog-head-right-side-close-button"
                  onClick={this.onClose}
                >
                  <FontAwesomeIcon icon={['fas', 'times']} />
                </Button>
              </div>
            </div>
          </div>
          <div className="knc-basic-dialog-content">{props.children}</div>
        </div>
      </Dialog>
    );
  }
}

BasicDialog.propTypes = {
  /* Functions */
  onClose: PropTypes.func.isRequired,
  /* Objects */
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

BasicDialog.defaultProps = {
  title: 'null',
};

export default BasicDialog;
