import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPosts } from '../Kuluster.config';
import Post from 'components/post/Post.component';
import Box from 'components/box/Box.component';

class KulusterList extends Component {
  render() {
    const { ...props } = this.props;
    if (props.kulusterInfo) {
      return (
        <div className="knc-kuluster-list-module">
          <div className="knc-kuluster-list-posts">
            {
              props.kulusterInfo.posts && props.kulusterInfo.posts.posts && props.kulusterInfo.posts.posts.map(post => (
                <Post
                  data={post}
                  isKulusterPost={true}
                  key={`knc-kuluster-posts-${post.id}`}
                />
              ))
            }
          </div>
          <div className="knc-kuluster-list-rest-container">
            <Box title="Kuluster Rules">
              Be Nice. All submissions must seek objective explanations3. Top-level comments must be written explanations. Explain for laypeople (but not actual 5-year-olds). ELI5 is for factual information, not opinions. Loaded questions are not allowed. Search before posting; don't repeat old posts. Don't guess. Don't try to trick the bot. Posts must begin with "ELI5:"
            </Box>
            <Box title="Advertisement">
              test advertisement
            </Box>
          </div>
        </div>
      );
    }
    return null;
  }
}

KulusterList.propTypes = {
  /* Functions */
  /* Objects */
  kulusterInfo: PropTypes.shape({}).isRequired,
};

KulusterList.defaultProps = {
};

export default KulusterList;
