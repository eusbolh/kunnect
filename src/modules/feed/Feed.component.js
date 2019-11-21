import React, { Component } from 'react';
import Post from 'components/post/Post.component';
import Box from 'components/box/Box.component';
import { Button, Link } from 'nysa-ui';
import { getPosts, getKulusters } from './Feed.config';

class Feed extends Component {
  getID = kuluster => kuluster.id;

  getImageSrc = kuluster => kuluster.image;

  getName = kuluster => kuluster.name;

  getSubscriberCount = kuluster => kuluster.subscriber_count;

  renderTrendingKuluster = kuluster => (
    <div className="knc-feed-trending-kuluster" key={`knc-feed-trending-kuluster-${this.getID(kuluster)}`}>
      <div className="knc-feed-trending-kuluster-image-container">
        <Button classes="knc-feed-trending-kuluster-image-button">
          <img alt="kuluster" className="knc-feed-trending-kuluster-image" src={this.getImageSrc(kuluster)} />
        </Button>
      </div>
      <div className="knc-feed-trending-kuluster-info">
        <Link classes="knc-feed-trending-kuluster-name" href="http://kunnect.co" intent="default">{this.getName(kuluster)}</Link>
        <div className="knc-feed-trending-kuluster-subscriber-count">{`${this.getSubscriberCount(kuluster)} members`}</div>
      </div>
      <div className="knc-feed-join-button-container">
        <Button classes="knc-feed-join-button" intent="primary">Join</Button>
      </div>
    </div>
  )

  render() {
    return (
      <div className="knc-feed-module">
        <div className="knc-feed-content">
          <div className="knc-feed-posts">
            {
              getPosts().map(post => <Post data={post} key={`knc-feed-posts-${post.id}`} />)
            }
          </div>
          <div className="knc-feed-rest-container">
            <Button
              classes="knc-feed-create-kuluster-button"
            >
              Create Kuluster
            </Button>
            <Box title="Trending Kulusters">
              <div className="knc-feed-trending-kulusters">
                {getKulusters().map(kuluster => this.renderTrendingKuluster(kuluster))}
              </div>
            </Box>
            <Box title="Advertisement">Test</Box>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
