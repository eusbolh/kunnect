import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from 'nysa-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faCommentAlt,
  faShare,
  faSave,
  faBan,
  faFlag,
  faReply,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '@blueprintjs/core';
import Comment from 'components/comment/Comment.component';
import CommentTextArea from 'components/comment/textarea/CommentTextArea.component';
import { getPost } from './Kuluster.post.config';
import BasicDialog from 'components/dialogs/basic/BasicDialog.component';

class KulusterPost extends Component {
  state = {
    isLinkCopied: false,
    isReplySectionOpen: false,
    reply: '',
  }

  componentDidMount = () => {
    // TODO: Pull post data here
  }

  /* Reply Helpers */

  onReplyChange = event => this.setState({ reply: event.target.value });

  /* Post Getters */

  getCommentCount = post => post.post && post.post.comment_count;

  getKulusterName = post => post.kuluster && post.kuluster.name;

  getKulusterImageSrc = post => post.kuluster && post.kuluster.image;

  getPostedAt = post => post.post && post.post.posted_at;

  getPostContent = post => post.post && post.post.content;

  getPostImage = post => post.post && post.post.image;

  getPostTitle = post => post.post && post.post.title;

  getUserName = post => post.user && post.user.name;

  getVoteCount = post => post.post && post.post.vote_count;

  /* Vote Buttons */

  getVoteButtonClasses = (post, value) => {
    if (post.vote === value) {
      return 'knc-kuluster-post-vote-button knc-kuluster-post-vote-button-selected';
    }
    return 'knc-kuluster-post-vote-button';
  }

  /* Share Dialog */

  renderShareDialog = () => (
    <BasicDialog
      isOpen={!!this.state.isShareDialogOpen}
      onClose={() => this.setState({ isShareDialogOpen: false, isLinkCopied: false })}
      title="Share"
    >
      <div className="knc-kuluster-post-share-dialog">
        <div className="knc-kuluster-post-share-dialog-description">You can copy the following link and share this post!</div>
        <div className="knc-kuluster-post-share-dialog-share-link-container">
          <div className="knc-kuluster-post-share-dialog-share-link">
            <textarea
              ref={(textarea) => { this.textArea = textarea; return null; }}
              value={`http://kunnect.co${this.props.location.pathname}`}
            />
          </div>
          <div className="knc-kuluster-post-share-dialog-copy-button-container">
            <Button
              classes="knc-kuluster-post-share-dialog-copy-button"
              minimal
              onClick={(e) => {
                this.textArea.select();
                document.execCommand('copy');
                e.target.focus();
                this.setState({ isLinkCopied: true });
              }}
            >
              <FontAwesomeIcon icon={['far', 'clone']} />
            </Button>
          </div>
        </div>
        <div className="knc-kuluster-post-share-dialog-copied-text">
          {
            this.state.isLinkCopied
              ? 'Link is copied!'
              : null
          }
        </div>
      </div>
    </BasicDialog>
  )

  render() {
    const { ...props } = this.props;
    const postData = getPost();
    console.log(this.props.match);
    console.log(this.props.location);
    return (
      <div className="knc-kuluster-post-module">
        <div className="knc-kuluster-post-container">
          <div className="knc-kuluster-post-top knc-kuluster-post-top--kuluster">
            <div className="knc-kuluster-post-top-left">
              <div className="knc-kuluster-post-info">
                <div className="knc-kuluster-post-info-left">
                  <div className="knc-kuluster-post-info-kuluster-image-container">
                    <Button classes="knc-kuluster-post-info-kuluster-image-button">
                      <img alt="kuluster" className="knc-kuluster-post-info-kuluster-image" src={this.getKulusterImageSrc(postData)} />
                    </Button>
                  </div>
                </div>
                <div className="knc-kuluster-post-info-right">
                  <div className="knc-kuluster-post-info-kuluster-name">
                    <Link
                      classes="knc-kuluster-post-info-kuluster-name-link"
                      href={`http://kunnect.co/k/${this.getKulusterName(postData)}`}
                      intent="default"
                      onClick={event => this.onLinkClick(event, `/k/${this.getKulusterName(postData)}`)}
                      text={`k/${this.getKulusterName(postData)}`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="knc-kuluster-post-top-right">
              <div className="knc-kuluster-post-info-user-name-and-posted-at">
                <span>posted by</span>
                <span>&nbsp;</span>
                <Link
                  classes="knc-kuluster-post-info-user-name-and-posted-at-link"
                  href={`http://kunnect.co/u/${this.getUserName(postData)}`}
                  intent="default"
                  onClick={event => this.onLinkClick(event, `/u/${this.getUserName(postData)}`)}
                  text={`u/${this.getUserName(postData)}`}
                />
                <span>&nbsp;·&nbsp;</span>
                <Link classes="knc-kuluster-post-info-user-name-and-posted-at-link" href="http://kunnect.co" text="bsd">{this.getPostedAt(postData)}</Link>
              </div>
              <div className="knc-kuluster-post-top-right-close-button-container">
                <Button
                  classes="knc-kuluster-post-top-right-close-button"
                  onClick={() => this.props.history.push(`/k/${this.props.match.params.kulusterName}`)}
                >
                  <FontAwesomeIcon icon={['fas', 'times']} />
                </Button>
              </div>
            </div>
          </div>
          <div className="knc-kuluster-post-middle">
            <div className="knc-kuluster-post-title">{this.getPostTitle(postData)}</div>
            <div className="knc-kuluster-post-content">{this.getPostContent(postData)}</div>
            <div className="knc-kuluster-post-image-container">
              {
                this.getPostImage(postData)
                  ? <img alt="kuluster-post-content" className="knc-kuluster-post-image" src={this.getPostImage(postData)} />
                  : null
              }
            </div>
          </div>
          <div className="knc-kuluster-post-bottom">
            <div className="knc-kuluster-post-bottom-left">
              <div className="knc-kuluster-post-vote-buttons">
                <Button
                  classes={this.getVoteButtonClasses(postData, 1)}
                  onClick={event => this.onVoteClick(event, 1)}
                >
                  <FontAwesomeIcon icon={['fas', 'caret-square-up']} />
                </Button>
                <div className="knc-kuluster-post-vote-count">{this.getVoteCount(postData)}</div>
                <Button
                  classes={this.getVoteButtonClasses(postData, -1)}
                  onClick={event => this.onVoteClick(event, -1)}
                >
                  <FontAwesomeIcon icon={['fas', 'caret-square-down']} />
                </Button>
              </div>
            </div>
            <div className="knc-kuluster-post-bottom-right">
              <div className="knc-kuluster-post-bottom-right-section">
                <Button
                  classes="knc-kuluster-post-bottom-right-button"
                  minimal={true}
                >
                  <FontAwesomeIcon icon={['fas', 'comment-alt']} />
                  <div className="knc-kuluster-post-bottom-right-section-text">{`${this.getCommentCount(postData)} comments`}</div>
                </Button>
              </div>
              <div className="knc-kuluster-post-bottom-right-section">
                <Button
                  classes="knc-kuluster-post-bottom-right-button"
                  minimal={true}
                  onClick={() => this.setState({ isShareDialogOpen: true })}
                >
                  <FontAwesomeIcon icon={['fas', 'share']} />
                  <div className="knc-kuluster-post-bottom-right-section-text">Share</div>
                </Button>
                {this.renderShareDialog()}
              </div>
              <div className="knc-kuluster-post-bottom-right-section">
                <Button
                  classes="knc-kuluster-post-bottom-right-button"
                  minimal={true}
                >
                  <FontAwesomeIcon icon={['fas', 'save']} />
                  <div className="knc-kuluster-post-bottom-right-section-text">Save</div>
                </Button>
              </div>
              <div className="knc-kuluster-post-bottom-right-section">
                <Button
                  classes="knc-kuluster-post-bottom-right-button"
                  minimal={true}
                >
                  <FontAwesomeIcon icon={['fas', 'ban']} />
                  <div className="knc-kuluster-post-bottom-right-section-text">Hide</div>
                </Button>
              </div>
              <div className="knc-kuluster-post-bottom-right-section">
                <Button
                  classes="knc-kuluster-post-bottom-right-button"
                  minimal={true}
                >
                  <FontAwesomeIcon icon={['fas', 'flag']} />
                  <div className="knc-kuluster-post-bottom-right-section-text">Report</div>
                </Button>
              </div>
            </div>
          </div>
          <div className="knc-kuluster-post-comments">
            <div className="knc-kuluster-post-comments-post-reply">
              {
                this.state.isReplySectionOpen
                  ? (
                    <CommentTextArea
                      handleChange={this.onReplyChange}
                      name="title"
                      multiline
                      onCancel={() => this.setState({ isReplySectionOpen: false })}
                      onConfirm={() => { console.log(this.state.reply); this.setState({ isReplySectionOpen: false, reply: '' }); }}
                      placeholder="What are your thoughts?"
                      value={this.state.reply}
                    />
                  ) : (
                    <Button
                      classes="knc-kuluster-post-comments-post-reply-empty"
                      onClick={() => this.setState({ isReplySectionOpen: true })}
                    >
                      What are your thoughts?
                    </Button>
                  )
              }
            </div>
            <div className="knc-kuluster-post-comments-content">
              {postData && postData.comments.map(comment => <Comment data={comment} key={`knc-kuluster-post-comment-${comment && comment.id}`} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

KulusterPost.propTypes = {
};

KulusterPost.defaultProps = {
};

export default KulusterPost;
