import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getKulusterInfo, getPosts } from './Kuluster.config';
import { Button } from 'nysa-ui';
import Post from 'components/post/Post.component';
import Box from 'components/box/Box.component';
import PostContainer from 'modules/post/Post.container';
import KulusterListContainer from './list/Kuluster.list.container';
import KulusterPostContainer from './post/Kuluster.post.container';
import { makeCancelable } from 'common/api/Api.helpers';
import SpinnerPage from 'components/spinnerPage/SpinnerPage.component';
import { hashCode } from 'common/common.utils';
import brandLogo from 'common/assets/logo_white.png';

class Kuluster extends Component {
  state = {
    isWaitingGetKulusterInfo: true,
  }

  getKulusterInfoPromise = null;

  componentDidMount = () => {
    this.props.updateSelectedMenu('/feed');
    this.getKulusterInfo();
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.match.params.kulusterName !== prevProps.match.params.kulusterName) {
      this.getKulusterInfo();
    }
  }

  getKulusterInfo = () => {
    if (this.getKulusterInfoPromise && this.getKulusterInfoPromise.cancel) {
      this.getKulusterInfoPromise.cancel();
    }
    this.getKulusterInfoPromise = makeCancelable(this.props.getKulusterInfo({ kulusterName: this.props.match.params.kulusterName }));
    this.getKulusterInfoPromise.promise
      .then(() => {
        this.setState({ isWaitingGetKulusterInfo: false });
      });
  }

  /* Getters */

  getCreatedAt = kuluster => kuluster && kuluster.created_at;

  getImageSrc = kuluster => kuluster && kuluster.image;

  getSubscriberCount = kuluster => kuluster && kuluster.subscriber_count;

  /* Getters for Kuluster */

  getKulusterDescription = kulusterInfo => kulusterInfo.description;

  getKulusterName = kulusterInfo => kulusterInfo.name;

  getKulusterInfoClasses = () => {
    let classes = 'knc-kuluster-info';
    const username = this.getKulusterName(this.props.kulusterInfo);
    const hash = hashCode(username);
    const modulo = hash % 5;
    classes += ` knc-kuluster-info--${modulo}`;
    return classes;
  }

  render() {
    const kuluster = getKulusterInfo();
    const { ...props } = this.props;
    if (this.state.isWaitingGetKulusterInfo) {
      return <SpinnerPage />;
    }
    if (props.kulusterInfo) {
      return (
        <div className="knc-kuluster-module">
          <div className={this.getKulusterInfoClasses()}>
            <div className="knc-kuluster-info-left">
              <div className="knc-kuluster-image-container">
                <img alt="kuluster" className="knc-kuluster-image" src={brandLogo} />
              </div>
            </div>
            <div className="knc-kuluster-info-right">
              <div className="knc-kuluster-info-kuluster-name">{`k/${this.getKulusterName(props.kulusterInfo)}`}</div>
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
            <div className="knc-kuluster-info-bottom-description">
              {this.getKulusterDescription(props.kulusterInfo)}
            </div>
          </div>
          <div className="knc-kuluster-content">
            <div className="knc-kuluster-content-container">
              <Switch>
                <Route exact path="/k/:kulusterName/:postID" component={KulusterPostContainer} />
                <Route component={KulusterListContainer} />
              </Switch>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

Kuluster.propTypes = {
  /* Functions */
  getKulusterInfo: PropTypes.func.isRequired,
  updateSelectedMenu: PropTypes.func.isRequired,
  /* Objects */
  kulusterInfo: PropTypes.shape({}),
  match: PropTypes.shape({
    params: PropTypes.shape({
      kulusterName: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

Kuluster.defaultProps = {
  kulusterInfo: null,
};

export default Kuluster;
