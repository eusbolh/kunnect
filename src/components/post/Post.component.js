import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from 'nysa-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretSquareUp, faCaretSquareDown, faComment } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretSquareUp, faCaretSquareDown, faComment);

class Post extends Component {
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
      return 'knc-post-vote-button knc-post-vote-button-selected';
    }
    return 'knc-post-vote-button';
  }

  render() {
    const { ...props } = this.props;
    return (
      <div className="knc-post-component">
        <div className="knc-post-top">
          <div className="knc-post-top-left">
            <div className="knc-post-info">
              <div className="knc-post-info-left">
                <div className="knc-post-info-kuluster-image-container">
                  <Button classes="knc-post-info-kuluster-image-button">
                    <img alt="kuluster" className="knc-post-info-kuluster-image" src={this.getKulusterImageSrc(props.data)} />
                  </Button>
                </div>
              </div>
              <div className="knc-post-info-right">
                <div className="knc-post-info-kuluster-name">
                  <Link href="http://kunnect.co" intent="default" text="hello">{`k/${this.getKulusterName(props.data)}`}</Link>
                </div>
                <div className="knc-post-info-user-name-and-posted-at">
                  <span>posted by u/</span>
                  <Link classes="knc-post-info-user-name-and-posted-at-link" href="http://kunnect.co" text="asd">{this.getUserName(props.data)}</Link>
                  <span>&nbsp;·&nbsp;</span>
                  <Link classes="knc-post-info-user-name-and-posted-at-link" href="http://kunnect.co" text="bsd">{this.getPostedAt(props.data)}</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="knc-post-top-right">
            tr
          </div>
        </div>
        <div className="knc-post-middle">
          <div className="knc-post-title">{this.getPostTitle(props.data)}</div>
          <div className="knc-post-content">{this.getPostContent(props.data)}</div>
          <div className="knc-post-image-container">
            {
              this.getPostImage(props.data)
                ? <img alt="post-content" className="knc-post-image" src={this.getPostImage(props.data)} />
                : null
            }
          </div>
        </div>
        <div className="knc-post-bottom">
          <div className="knc-post-bottom-left">
            <div className="knc-post-vote-buttons">
              <Button classes={this.getVoteButtonClasses(props.data, 1)}>
                <FontAwesomeIcon icon={['fas', 'caret-square-up']} />
              </Button>
              <div className="knc-post-vote-count">{this.getVoteCount(props.data)}</div>
              <Button classes={this.getVoteButtonClasses(props.data, -1)}>
                <FontAwesomeIcon icon={['fas', 'caret-square-down']} />
              </Button>
            </div>
          </div>
          <div className="knc-post-bottom-right">
            <div className="knc-post-comment-count-container">
              <FontAwesomeIcon icon={['fas', 'comment']} />
              <div className="knc-post-comment-count">{`${this.getCommentCount(props.data)} comments`}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

Post.defaultProps = {

};

export default Post;
