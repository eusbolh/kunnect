import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'nysa-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentTextArea from './textarea/CommentTextArea.component';

class Comment extends Component {
  state = {
    isReplySectionOpen: false,
    reply: '',
  }

  getID = comment => comment && comment.id;

  getUserName = comment => comment && comment.user && comment.user.name;

  getPostedAt = comment => comment && comment.comment && comment.comment.posted_at;

  getContent = comment => comment && comment.comment && comment.comment.content;

  getVoteCount = comment => comment && comment.comment && comment.comment.vote_count;

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

  render() {
    const { ...props } = this.props;
    return (
      <div className="knc-comment-component">
        <div className="knc-comment-top">
          <div className="knc-comment-info">
            <div className="knc-comment-info-user">{this.getUserName(props.data)}</div>
            <div className="knc-comment-info-timestamp">{this.getPostedAt(props.data)}</div>
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
                  onConfirm={() => { console.log(this.state.reply); this.setState({ isReplySectionOpen: false, reply: '' }); }}
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
                        <Comment data={comment} />
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
  /* Objects */
  data: PropTypes.shape({}),
};

Comment.defaultProps = {
  data: null,
};

export default Comment;
