import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Popover,
} from '@blueprintjs/core';
import { Button } from 'nysa-ui';
import BasicDialog from 'components/dialogs/basic/BasicDialog.component';
import CreatePostForm from 'components/forms/feed/createPost/CreatePost.form';
import brandLogo from 'common/assets/logo_brandcolor.png';
import FormTextInput from 'components/forms/FormTextInput';
import { makeCancelable } from 'common/api/Api.helpers';

class Topbar extends Component {
  state = {
    isCreatePostDialogOpen: false,
    isUserBoxPopoverOpen: false,
  }

  createPostPromise = null;

  componentWillUnmount = () => {
    if (this.createPostPromise && this.createPostPromise.cancel) {
      this.createPostPromise.cancel();
    }
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
      <CreatePostForm
        onConfirm={this.createPost}
      />
    </BasicDialog>
  )

  createPost = (values) => {
    this.createPostPromise = makeCancelable(this.props.createPost({
      content: values.content,
      kulusterName: values.kuluster,
      title: values.title,
    }));
    this.createPostPromise.promise
      .then(() => {
        this.closeDialog('CreatePost');
      });
  }

  /* User Box Popover */

  handlePopoverInteraction = (nextOpenState) => {
    if (!nextOpenState) {
      this.setState({ isUserBoxPopoverOpen: false });
    }
  }

  renderUserBoxPopover = () => (
    <div className="knc-topbr-user-box-popover">
      <div className="knc-topbr-user-box-popover-content">
        <div className="knc-topbr-user-box-popover-content-options">
          <div className="knc-topbr-user-box-popover-content-option">
            <Button
              classes="knc-topbr-user-box-popover-content-option-button"
              disabled
            >
              <div className="knc-topbr-user-box-popover-content-option-button-text">Settings</div>
              <div className="knc-topbr-user-box-popover-content-option-button-icon">
                <FontAwesomeIcon icon={['fas', 'cog']} />
              </div>
            </Button>
          </div>
          <div className="knc-topbr-user-box-popover-content-option">
            <Button
              classes="knc-topbr-user-box-popover-content-option-button"
              onClick={this.logout}
            >
              <div className="knc-topbr-user-box-popover-content-option-button-text">Logout</div>
              <div className="knc-topbr-user-box-popover-content-option-button-icon">
                <FontAwesomeIcon icon={['fas', 'sign-out-alt']} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  logout = () => {
    localStorage.clear();
    this.props.history.push('/login');
  }

  render() {
    const modifiers = {
      arrow: { enabled: false },
      computeStyle: { gpuAcceleration: false },
    };
    return (
      <div className="knc-topbr-component">
        <div className="knc-topbr-left-side">
          <div className="knc-topbr-searchbar-container">
            <FormTextInput
              placeholder="Search kuluster by name"
            />
          </div>
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
            <Popover
              content={this.renderUserBoxPopover()}
              isOpen={this.state.isUserBoxPopoverOpen}
              modifiers={modifiers}
              onInteraction={this.handlePopoverInteraction}
              position="bottom-right"
            >
              <Button
                classes="knc-topbr-user-box-button"
                minimal
                onClick={() => this.setState({ isUserBoxPopoverOpen: true })}
              >
                <div className="knc-topbr-user-box">
                  <div className="knc-topbr-user-box-left-side">
                    <div className="knc-topbr-user-box-profile-image-container">
                      <img
                        alt="kunnect"
                        className="knc-topbr-user-box-profile-image"
                        src={brandLogo}
                      />
                    </div>
                    <div className="knc-topbr-user-box-user-info">
                      <div className="knc-topbr-user-box-user-name">eusbolh</div>
                      <div className="knc-topbr-user-box-karma">20 karma</div>
                    </div>
                  </div>
                  <div className="knc-topbr-user-box-right-side">
                    <div className="knc-topbr-user-box-options-button">
                      <FontAwesomeIcon icon={['fas', 'chevron-down']} />
                    </div>
                  </div>
                </div>
              </Button>
            </Popover>
          </div>
        </div>
        {this.renderCreatePostDialog()}
      </div>
    );
  }
}

Topbar.propTypes = {
  /* Functions */
  createPost: PropTypes.func.isRequired,
  /* Objects */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

Topbar.defaultProps = {
};

export default withRouter(Topbar);
