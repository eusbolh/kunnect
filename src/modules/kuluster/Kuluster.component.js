import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getKulusterInfo, getPosts } from './Kuluster.config';
import { Button } from 'nysa-ui';
import Post from 'components/post/Post.component';

class Kuluster extends Component {
  componentDidMount = () => {
    // TODO: Make api call to props.match.kulusterName
  }

  /* Getters */

  getCreatedAt = kuluster => kuluster && kuluster.created_at;

  getImageSrc = kuluster => kuluster && kuluster.image;

  getKulusterName = kuluster => kuluster && kuluster.name;
  
  getSubscriberCount = kuluster => kuluster && kuluster.subscriber_count;

  render() {
    console.log(this.props);
    const kuluster = getKulusterInfo();
    const posts = getPosts();
    return (
      <div className="knc-kuluster-module">
        <div className="knc-kuluster-info">
          <div className="knc-kuluster-info-left">
            <div className="knc-kuluster-image-container">
              <img alt="kuluster" className="knc-kuluster-image" src={this.getImageSrc(kuluster)} />
            </div>
          </div>
          <div className="knc-kuluster-info-right">
            <div className="knc-kuluster-info-kuluster-name">{`k/${this.getKulusterName(kuluster)}`}</div>
            <div className="knc-kuluster-info-subscribe-button-container">
              <Button
                classes="knc-kuluster-info-subscribe-button"
                onClick={() => console.log('subscribe')}
                text="Subscribe"
              />
            </div>
          </div>
        </div>
        <div className="knc-kuluster-info-bottom">
          <div className="knc-kuluster-info-bottom-content">
            <div className="knc-kuluster-info-bottom-subscriber-count">{`${this.getSubscriberCount(kuluster)} subscriber`}</div>
            <div className="knc-kuluster-info-bottom-created-at">{`created at ${this.getCreatedAt(kuluster)}`}</div>
          </div>
        </div>
        <div className="knc-kuluster-content">
          <div className="knc-kuluster-posts">
            {
              posts.map(post => <Post data={post} isKulusterPost={true} key={`knc-kuluster-posts-${post.id}`} />)
            }
          </div>
          <div className="knc-kuluster-rest-container">hello</div>
        </div>
      </div>
    );
  }
}

Kuluster.propTypes = {
  /* Functions */
  /* Objects */
  match: PropTypes.shape({
    params: PropTypes.shape({
      kulusterName: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

Kuluster.defaultProps = {
};

export default Kuluster;
