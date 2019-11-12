import React, { Component } from 'react';
import Post from 'components/post/Post.component';
import { getPosts } from './Feed.config';

class Feed extends Component {
  render() {
    return (
      <div className="knc-feed-module">
        <div className="knc-feed-content">
          <div className="knc-feed-posts">
            {
              getPosts().map(post => <Post data={post} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
