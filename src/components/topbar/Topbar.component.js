import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'nysa-ui';

library.add(faPlusSquare);

class Topbar extends Component {
  render() {
    return (
      <div className="knc-topbr-component">
        <div className="knc-topbr-left-side">
          search bar
        </div>
        <div className="knc-topbr-right-side">
          <div className="knc-topbr-button-container">
            <Button
              classes="knc-topbr-create-post-button"
              minimal={true}
            >
              <FontAwesomeIcon icon={['fas', 'plus-square']} />
            </Button>
          </div>
          <div className="knc-topbr-divider">&nbsp;</div>
          <div className="knc-topbr-user-box-container">
            <div className="knc-topbr-user-box">
              <div className="knc-topbr-user-box-left-side">
                <div className="knc-topbr-user-box-user-name">eusbolh</div>
                <div className="knc-topbr-user-box-karma">20 karma</div>
              </div>
              <div className="knc-topbr-user-box-right-side">
                <div className="knc-topbr-user-box-profile-image">
                  i
                </div>
              </div>
            </div>
          </div>
        </div>      
      </div>
    );
  }
}

Topbar.propTypes = {
};

Topbar.defaultProps = {
};

export default Topbar;
