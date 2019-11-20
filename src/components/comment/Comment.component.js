import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  getUserName = comment => comment && comment.user && comment.user.name;

  getPostedAt = comment => comment && comment.comment && comment.comment.posted_at;

  getContent = comment => comment && comment.comment && comment.comment.content;

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
        <div className="knc-comment-bottom"></div>
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
