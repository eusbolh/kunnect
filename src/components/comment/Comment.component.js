import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'nysa-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Comment extends Component {
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
              onClick={() => console.log('reply')}
            >
              <FontAwesomeIcon icon={['fas', 'reply']} />
              <div className="knc-comment-bottom-button-text">Reply</div>
            </Button>
          </div>
          <div className="knc-comment-bottom-button-container">
            <Button
              classes="knc-comment-bottom-button"
              onClick={() => console.log('share')}
            >
              <FontAwesomeIcon icon={['fas', 'share']} />
              <div className="knc-comment-bottom-button-text">Share</div>
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
          this.getComments(props.data)
            ? (
              <div className="knc-comment-comments">
                {
                  this.getComments(props.data).map(comment => (
                    <div className="knc-comment-comments-comment">
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
