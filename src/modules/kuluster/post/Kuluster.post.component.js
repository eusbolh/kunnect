import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';
import { Button, Link } from 'nysa-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from 'components/comment/Comment.component';
import CommentTextArea from 'components/comment/textarea/CommentTextArea.component';
import BasicDialog from 'components/dialogs/basic/BasicDialog.component';
import ReportPostForm from 'components/forms/post/reportPost/ReportPost.form';
import { getPost } from './Kuluster.post.config';
import { makeCancelable } from 'common/api/Api.helpers';
import SpinnerPage from 'components/spinnerPage/SpinnerPage.component';
import brandLogo from 'common/assets/logo_white.png';
import { hashCode } from 'common/common.utils';

class KulusterPost extends Component {
  state = {
    isLinkCopied: false,
    isReplySectionOpen: false,
    isWaitingGetPostInfo: true,
    reply: '',
  }

  getPostInfoPromise = null;

  componentDidMount = () => {
    this.getPostInfoPromise = makeCancelable(this.props.getPostInfo({ postID: this.props.match.params.postID }));
    this.getPostInfoPromise.promise
      .then(() => {
        this.setState({ isWaitingGetPostInfo: false });
      });
  }

  /* Reply Helpers */

  onReplyChange = event => this.setState({ reply: event.target.value });

  /* Post Getters */

  getCommentCount = post => post && post.commentCount;

  getKulusterName = post => post && post.kulusterName;

  getKulusterImageSrc = post => post.kuluster && post.kuluster.image;

  getPostedAt = post => post && post.dateCreated;

  getPostContent = post => post && post.content;

  getPostID = post => post && post.postId;

  getPostImage = post => post.post && post.post.image;

  getPostTitle = post => post && post.title;

  getUserName = post => post && post.creatorName;

  getVoteCount = post => post && post.likes;

  getComments = post => post && post.comments;

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

  /* Report Dialog */

  renderReportDialog = () => (
    <BasicDialog
      isOpen={!!this.state.isReportDialogOpen}
      onClose={() => this.setState({ isReportDialogOpen: false })}
      title="Report"
    >
      <ReportPostForm
        onConfirm={(values) => {
          alert(`Report details: ${values.content}`);
          this.setState({ isReportDialogOpen: false });
        }}
      />
    </BasicDialog>
  )

  getPostTopClasses = (post) => {
    let classes = 'knc-kuluster-post-top knc-kuluster-post-top--kuluster';
    const kulusterName = this.getKulusterName(post);
    const hash = hashCode(kulusterName);
    const modulo = hash % 5;
    classes += ` knc-kuluster-post-top--${modulo}`;
    return classes;
  }

  onLinkClick = (event, linkURL) => {
    event.stopPropagation();
    this.props.history.push(linkURL);
  }

  render() {
    const { ...props } = this.props;
    const postData = getPost();
    if (this.state.isWaitingGetPostInfo) {
      return <SpinnerPage />;
    }
    if (props.postDetails) {
      return (
        <div className="knc-kuluster-post-module">
          <div className="knc-kuluster-post-container">
            <div className={this.getPostTopClasses(props.postDetails)}>
              <div className="knc-kuluster-post-top-left">
                <div className="knc-kuluster-post-info">
                  <div className="knc-kuluster-post-info-left">
                    <div className="knc-kuluster-post-info-kuluster-image-container">
                      <Button classes="knc-kuluster-post-info-kuluster-image-button">
                        <img alt="kuluster" className="knc-kuluster-post-info-kuluster-image" src={brandLogo} />
                      </Button>
                    </div>
                  </div>
                  <div className="knc-kuluster-post-info-right">
                    <div className="knc-kuluster-post-info-kuluster-name">
                      <Link
                        classes="knc-kuluster-post-info-kuluster-name-link"
                        href={`http://kunnect.co/k/${this.getKulusterName(props.postDetails)}`}
                        intent="default"
                        onClick={event => this.onLinkClick(event, `/k/${this.getKulusterName(props.postDetails)}`)}
                        text={`k/${this.getKulusterName(props.postDetails)}`}
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
                    href={`http://kunnect.co/u/${this.getUserName(props.postDetails)}`}
                    intent="default"
                    onClick={event => this.onLinkClick(event, `/u/${this.getUserName(props.postDetails)}`)}
                    text={`u/${this.getUserName(props.postDetails)}`}
                  />
                  <span>&nbsp;·&nbsp;</span>
                  <Link classes="knc-kuluster-post-info-user-name-and-posted-at-link" href="http://kunnect.co">
                    {
                      this.getPostedAt(props.postDetails)
                        ? (
                          <FormattedDate
                            value={new Date(parseInt(this.getPostedAt(props.postDetails), 10))}
                            year="numeric"
                            month="long"
                            day="2-digit"
                          />
                        ) : null
                    }
                  </Link>
                </div>
              </div>
            </div>
            <div className="knc-kuluster-post-middle">
              <div className="knc-kuluster-post-title">{this.getPostTitle(props.postDetails)}</div>
              <div className="knc-kuluster-post-content">{this.getPostContent(props.postDetails)}</div>
            </div>
            <div className="knc-kuluster-post-bottom">
              <div className="knc-kuluster-post-bottom-left">
                <div className="knc-kuluster-post-vote-buttons">
                  <Button
                    classes={this.getVoteButtonClasses(props.postDetails, 1)}
                    onClick={event => this.onVoteClick(event, 1)}
                  >
                    <FontAwesomeIcon icon={['fas', 'caret-square-up']} />
                  </Button>
                  <div className="knc-kuluster-post-vote-count">{this.getVoteCount(props.postDetails)}</div>
                  <Button
                    classes={this.getVoteButtonClasses(props.postDetails, -1)}
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
                    <div className="knc-kuluster-post-bottom-right-section-text">{`${this.getCommentCount(props.postDetails)} comments`}</div>
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
                  {this.renderReportDialog()}
                </div>
                <div className="knc-kuluster-post-bottom-right-section">
                  <Button
                    classes="knc-kuluster-post-bottom-right-button"
                    minimal={true}
                    onClick={() => this.setState({ isReportDialogOpen: true })}
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
                {this.getComments(props.postDetails) && this.getComments(props.postDetails).map(comment => (
                  <Comment
                    createComment={props.createComment}
                    data={comment}
                    key={`knc-kuluster-post-comment-${comment && comment.commentId}`}
                    postID={this.props.match.params.postID}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

KulusterPost.propTypes = {
  /* Functions */
  createComment: PropTypes.func.isRequired,
  getPostInfo: PropTypes.func.isRequired,
  /* Objects */
  postDetails: PropTypes.shape({}),
};

KulusterPost.defaultProps = {
  postDetails: null,
};

export default KulusterPost;
