import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appendClasses } from 'common/common.utils';
import brandLogoTextWhite from 'common/assets/logotext_white.png';
import brandLogoWhite from 'common/assets/logo_white.png';

class AuthBase extends Component {
  state = {
    adImage: 1,
  }

  componentDidMount = () => {
    this.setState({ adImage: Math.floor(Math.random() * 2) + 1 });
  }

  render() {
    const { ...props } = this.props;
    return (
      <div className={appendClasses('knc-authb-component --box-shadow-1', props.classes)}>
        <div className={`knc-authb-ad-container --background-${this.state.adImage}`}>
          <div className="knc-authb-brand-logo-container">
            <img alt="kunnect-brand-logo-text" className="knc-authb-brand-logo" src={brandLogoTextWhite} />
          </div>
          <div className="knc-authb-ad-text-container">
            <div className="knc-authb-ad-title">Get together with your friends!</div>
            <div className="knc-authb-ad-subtitle">We build a platform to give people the power to share and make the world more open and connected.</div>
          </div>
        </div>
        <div className="knc-authb-form-container">
          <div className="knc-authb-form-head">
            <div className="knc-authb-brand-logo-container" style={{ background: props.brandLogoBackgroundColor }}>
              <img alt="kunnect-brand-logo" className="knc-authb-brand-logo" src={brandLogoWhite} />
            </div>
            <div className="knc-authb-form-title">{props.formTitle}</div>
            <div className="knc-authb-form-subtitle">{props.formSubtitle}</div>
          </div>
          <div className="knc-authb-form-content">
            {props.children}
          </div>
          <div className="knc-authb-redirect-container">
            <div className="knc-authb-redirect-question">{props.redirectQuestion}</div>
            <div className="knc-authb-redirect-text">{props.redirectText}</div>
          </div>
          <div className="knc-authb-footer">
            <div className="knc-authb-footer-element">Terms</div>
            <div className="knc-authb-footer-element">Privacy</div>
            <div className="knc-authb-footer-element">Contact</div>
          </div>
        </div>
      </div>
    );
  }
}

AuthBase.propTypes = {
  /* Objects */
  brandLogoBackgroundColor: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.string,
  formTitle: PropTypes.string,
  formSubtitle: PropTypes.string,
  redirectQuestion: PropTypes.string,
  redirectText: PropTypes.string,
};

AuthBase.defaultProps = {
  brandLogoBackgroundColor: null,
  children: null,
  classes: null,
  formTitle: null,
  formSubtitle: null,
  redirectQuestion: null,
  redirectText: null,
};

export default AuthBase;
