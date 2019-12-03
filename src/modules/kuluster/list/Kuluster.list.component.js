import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPosts } from '../Kuluster.config';
import Post from 'components/post/Post.component';

class KulusterList extends Component {
  render() {
    const posts = getPosts();
    return (
      <div className="knc-kuluster-list-module">
        {
          posts.map(post => (
            <Post
              data={post}
              isKulusterPost={true}
              key={`knc-kuluster-posts-${post.id}`}
            />
          ))
        }
      </div>
    );
  }
}

KulusterList.propTypes = {
};

KulusterList.defaultProps = {
};

export default KulusterList;
