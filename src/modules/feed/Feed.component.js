import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from 'components/post/Post.component';
import Box from 'components/box/Box.component';
import { Button, Link } from 'nysa-ui';
import { getPosts, getKulusters } from './Feed.config';
import BasicDialog from 'components/dialogs/basic/BasicDialog.component';
import CreateKulusterForm from 'components/forms/feed/createKuluster/CreateKuluster.form';
import { makeCancelable } from 'common/api/Api.helpers';
import SpinnerPage from 'components/spinnerPage/SpinnerPage.component';

class Feed extends Component {
  state = {
    isCreateKulusterDialogOpen: false,
    isWaitingKulusterCreation: false,
    isPageLoading: true,
  }

  createKulusterPromise = null;

  pageLoadingPromise = null;

  componentDidMount = () => {
    this.props.updateSelectedMenu('/feed');
    this.pageLoadingPromise = makeCancelable(this.props.getFeed());
    this.pageLoadingPromise
      .promise
      .then(() => this.setState({ isPageLoading: false }))
      .catch(() => null);
  }

  componentWillUnmount = () => {
    this.pageLoadingPromise.cancel();
    if (this.createKulusterPromise && this.createKulusterPromise.cancel) {
      this.createKulusterPromise.cancel();
    }
  }

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

  /* Dialog Helpers */

  closeDialog = dialog => this.setState({ [`is${dialog}DialogOpen`]: false })

  openDialog = dialog => this.setState({ [`is${dialog}DialogOpen`]: true })

  /* Create Kuluster */

  renderCreateKulusterDialog = () => (
    <BasicDialog
      isOpen={this.state.isCreateKulusterDialogOpen}
      onClose={() => this.closeDialog('CreateKuluster')}
      title="Create Kuluster"
    >
      <CreateKulusterForm
        isWaitingResponse={this.state.isWaitingKulusterCreation}
        kulusterType="public"
        onConfirm={this.createKuluster}
      />
    </BasicDialog>
  )

  createKuluster = (values) => {
    this.setState({ isWaitingKulusterCreation: true });
    this.createKulusterPromise = makeCancelable(this.props.createKuluster(values));
    this.createKulusterPromise
      .promise
      .then((isSucceed) => {
        this.setState({ isWaitingKulusterCreation: false });
        if (isSucceed) {
          this.setState({ isCreateKulusterDialogOpen: false });
        }
      })
      .catch(() => null);
  }

  render() {
    const { ...props } = this.props;
    if (this.state.isPageLoading) {
      return <SpinnerPage />;
    }
    return (
      <div className="knc-feed-module">
        <div className="knc-feed-content">
          <div className="knc-feed-posts">
            {
              props.feed
                ? props.feed.map(post => <Post data={post} key={`knc-feed-posts-${post.id}`} />)
                : getPosts().map(post => <Post data={post} key={`knc-feed-posts-${post.id}`} />)
            }
          </div>
          <div className="knc-feed-rest-container">
            <Button
              classes="knc-feed-create-kuluster-button"
              onClick={() => this.openDialog('CreateKuluster')}
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
        {this.renderCreateKulusterDialog()}
      </div>
    );
  }
}

Feed.propTypes = {
  /* Functions */
  createKuluster: PropTypes.func.isRequired,
  getFeed: PropTypes.func.isRequired,
  updateSelectedMenu: PropTypes.func.isRequired,
  /* Objects */
  feed: PropTypes.arrayOf(PropTypes.shape({})),
};

Feed.defaultProps = {
  feed: null,
};

export default Feed;
