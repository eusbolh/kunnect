import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'nysa-ui';
import BasicDialog from 'components/dialogs/basic/BasicDialog.component';
import CreatePostForm from 'components/forms/feed/createPost/CreatePost.form';

class Topbar extends Component {
  state = {
    isCreatePostDialogOpen: false,
  }

  /* Dialog Helpers */

  closeDialog = dialog => this.setState({ [`is${dialog}DialogOpen`]: false })

  openDialog = dialog => this.setState({ [`is${dialog}DialogOpen`]: true })

  /* Create Post Dialog */

  renderCreatePostDialog = () => (
    <BasicDialog
      isOpen={this.state.isCreatePostDialogOpen}
      onClose={() => this.closeDialog('CreatePost')}
      title="Create Post"
    >
      <CreatePostForm />
    </BasicDialog>
  )

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
              onClick={() => this.openDialog('CreatePost')}
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
                  <FontAwesomeIcon icon={['fas', 'plus-square']} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.renderCreatePostDialog()}
      </div>
    );
  }
}

Topbar.propTypes = {
};

Topbar.defaultProps = {
};

export default Topbar;
