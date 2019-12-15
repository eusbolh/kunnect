import React, { Component } from 'react';
import { FormattedDate } from 'react-intl';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'nysa-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentTextArea from './textarea/CommentTextArea.component';
import BasicDialog from 'components/dialogs/basic/BasicDialog.component';

class Comment extends Component {
  state = {
    isReplySectionOpen: false,
    reply: '',
  }

  getID = comment => comment && comment.commentId;

  getUserName = comment => comment && comment.creatorName;

  getPostedAt = comment => comment && comment.dateCreated;

  getContent = comment => comment && comment.content;

  getVoteCount = comment => comment && comment.likes;

  getComments = comment => comment && comment.comments;

  /* Vote Buttons */

  getVoteButtonClasses = (post, value) => {
    if (post.vote === value) {
      return 'knc-comment-vote-button knc-comment-vote-button-selected';
    }
    return 'knc-comment-vote-button';
  }

  /* Reply Helpers */

  onReplyChange = event => this.setState({ reply: event.target.value });

  createComment = (reply) => {
    this.props.createComment({
      commentID: this.getID(this.props.data),
      content: reply,
      postID: this.props.postID,
    });
  }

  renderDeleteDialog = () => (
    <BasicDialog
      isOpen={this.state.isDeleteDialogOpen}
      onClose={() => this.setState({ isDeleteDialogOpen: false })}
      title="Delete Comment"
    >
      <div className="knc-basic-delete-dialog">
        <div className="knc-basic-delete-dialog-description">Are you sure you want to delete this comment? This action is irreversible.</div>
        <div className="knc-basic-delete-dialog-buttons">
          <Button
            classes="knc-basic-delete-dialog-button"
            onClick={() => this.setState({ isDeleteDialogOpen: false })}
            text="Cancel"
          />
          <Button
            classes="knc-basic-delete-dialog-button"
            intent="danger"
            onClick={() => {
              this.setState({ isDeleteDialogOpen: false });
              this.deleteComment();
            }}
            text="Delete Comment"
          />
        </div>
      </div>
    </BasicDialog>
  )

  deleteComment = () => {
    this.props.deleteComment({ commentID: this.getID(this.props.data) });
  }

  render() {
    const { ...props } = this.props;
    return (
      <div className="knc-comment-component">
        <div className="knc-comment-top">
          <div className="knc-comment-info">
            <div className="knc-comment-info-user">{this.getUserName(props.data)}</div>
            <div className="knc-comment-info-timestamp">
              {
                this.getPostedAt(props.data)
                  ? (
                    <FormattedDate
                      value={new Date(parseInt(this.getPostedAt(props.data), 10))}
                      year="numeric"
                      month="long"
                      day="2-digit"
                    />
                  ) : null
              }
            </div>
          </div>
        </div>
        <div className="knc-comment-middle">
          <div className="knc-comment-content">{this.getContent(props.data)}</div>
        </div>
        <div className="knc-comment-bottom">
          <div className="knc-comment-vote-buttons">
            <Button
              classes={this.getVoteButtonClasses(props.data, 1)}
              onClick={event => this.onVoteClick(event, 1)}
            >
              <FontAwesomeIcon icon={['fas', 'caret-square-up']} />
            </Button>
            <div className="knc-post-vote-count">{this.getVoteCount(props.data)}</div>
            <Button
              classes={this.getVoteButtonClasses(props.data, -1)}
              onClick={event => this.onVoteClick(event, -1)}
            >
              <FontAwesomeIcon icon={['fas', 'caret-square-down']} />
            </Button>
          </div>
          <div className="knc-comment-bottom-button-container">
            <Button
              classes="knc-comment-bottom-button"
              onClick={() => this.setState({ isReplySectionOpen: true })}
            >
              <FontAwesomeIcon icon={['fas', 'reply']} />
              <div className="knc-comment-bottom-button-text">Reply</div>
            </Button>
          </div>
          <div className="knc-comment-bottom-button-container">
            <Button
              classes="knc-comment-bottom-button"
              onClick={() => console.log('report')}
            >
              <FontAwesomeIcon icon={['fas', 'flag']} />
              <div className="knc-comment-bottom-button-text">Report</div>
            </Button>
          </div>
          {
            this.getUserName(this.props.data) === (this.props.userData && this.props.userData.username)
            ? (
              <div className="knc-comment-bottom-button-container">
                <Button
                  classes="knc-comment-bottom-button"
                  onClick={() => this.setState({ isDeleteDialogOpen: true })}
                >
                  <FontAwesomeIcon icon={['fas', 'trash']} />
                  <div className="knc-comment-bottom-button-text">Delete</div>
                </Button>
              </div>
            ) : null
          }
          {this.renderDeleteDialog()}
        </div>
        {
          this.state.isReplySectionOpen
            ? (
              <div className="knc-comment-reply">
                <CommentTextArea
                  handleChange={this.onReplyChange}
                  name="title"
                  multiline
                  onCancel={() => this.setState({ isReplySectionOpen: false })}
                  onConfirm={() => {
                    console.log(this.state.reply);
                    this.setState({ isReplySectionOpen: false, reply: '' });
                    this.createComment(this.state.reply);
                  }}
                  placeholder="What are your thoughts?"
                  value={this.state.reply}
                />
              </div>
            ) : null
        }
        {
          this.getComments(props.data)
            ? (
              <div className="knc-comment-comments">
                {
                  this.getComments(props.data).map(comment => (
                    <div className="knc-comment-comments-comment" key={`knc-comment-comments-comment-${this.getID(comment)}`}>
                      <div className="knc-comment-comments-comment-left-space">
                        <div className="knc-comment-comments-comment-left-space-top">&nbsp;</div>
                        <div className="knc-comment-comments-comment-left-space-bottom">&nbsp;</div>
                      </div>
                      <div className="knc-comment-comments-comment-content">
                        <Comment
                          createComment={props.createComment}
                          data={comment}
                          deleteComment={props.deleteComment}
                          postID={props.postID}
                          userData={props.userData}
                        />
                      </div>
                    </div>
                  ))
                }
              </div>
            ) : null
        }
      </div>
    );
  }
}

Comment.propTypes = {
  /* Functions */
  createComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  /* Objects */
  data: PropTypes.shape({}),
  postID: PropTypes.number.isRequired,
  userData: PropTypes.shape({}),
};

Comment.defaultProps = {
  data: null,
  userData: null,
};

export default withRouter(Comment);
