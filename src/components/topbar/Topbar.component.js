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
import brandLogo from 'common/assets/logo_white.png';
import FormTextInput from 'components/forms/FormTextInput';
import { makeCancelable } from 'common/api/Api.helpers';
import { hashCode } from 'common/common.utils';
import SuggestBar from 'components/suggestBar/SuggestBar.component';

class Topbar extends Component {
  state = {
    isCreatePostDialogOpen: false,
    isUserBoxPopoverOpen: false,
  }

  createPostPromise = null;

  componentDidMount = () => {
    this.props.getKulusterList();
  }

  componentWillUnmount = () => {
    if (this.createPostPromise && this.createPostPromise.cancel) {
      this.createPostPromise.cancel();
    }
  }

  /* User Data Getters */

  getKarma = userData => userData && userData.karma;

  getUsername = userData => userData && userData.username;

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
        kulusterList={this.props.kulusterList}
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

  getUserProfileImageClasses = () => {
    let classes = 'knc-topbr-user-box-profile-image-container';
    const username = this.getUsername(this.props.userData);
    const hash = hashCode(username);
    const modulo = hash % 5;
    classes += ` knc-topbr-user-box-profile-image-container--${modulo}`;
    return classes;
  }

  onSuggestBarItemClick = (item) => {
    this.props.history.push(`/k/${item}`);
  }

  render() {
    const modifiers = {
      arrow: { enabled: false },
      computeStyle: { gpuAcceleration: false },
    };
    const { ...props } = this.props;
    return (
      <div className="knc-topbr-component">
        <div className="knc-topbr-left-side">
          <div className="knc-topbr-searchbar-container">
            <SuggestBar
              onClick={this.onSuggestBarItemClick}
              suggest={this.props.kulusterList}
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
                    <div className={this.getUserProfileImageClasses()}>
                      <img
                        alt="kunnect"
                        className="knc-topbr-user-box-profile-image"
                        src={brandLogo}
                      />
                    </div>
                    <div className="knc-topbr-user-box-user-info">
                      <div className="knc-topbr-user-box-user-name">{this.getUsername(props.userData)}</div>
                      <div className="knc-topbr-user-box-karma">{`${this.getKarma(props.userData)} karma`}</div>
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
  getKulusterList: PropTypes.func.isRequired,
  /* Objects */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  kulusterList: PropTypes.arrayOf(PropTypes.string),
  userData: PropTypes.shape({}),
};

Topbar.defaultProps = {
  kulusterList: null,
  userData: null,
};

export default withRouter(Topbar);
