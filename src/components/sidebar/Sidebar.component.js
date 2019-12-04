import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
} from 'nysa-ui';
import brandLogoWhite from 'common/assets/logo_white.png';

const menus = [
  {
    url: '/feed',
    icon: ['fas', 'list'],
  }, {
    url: '/messages',
    icon: ['far', 'comment-alt'],
  }, {
    url: '/notifications',
    icon: ['far', 'bell'],
  },
];

const helpMenus = [
  {
    url: '/help',
    icon: ['far', 'question-circle'],
  }, {
    url: '/report',
    icon: ['far', 'flag'],
  },
];

class Sidebar extends Component {
  renderMenu = (menu, index) => (
    <Button
      classes="knc-sideb-menu"
      key={`knc-sideb-menu-${index}`}
      onClick={() => this.props.history.push(menu.url)}
    >
      <FontAwesomeIcon icon={menu.icon} />
    </Button>
  )

  renderMenus = menuList => menuList.map((menu, index) => this.renderMenu(menu, index));

  render() {
    return (
      <div className="knc-sideb-component --box-shadow-1">
        <div className="knc-sideb-brand-logo-container">
          <img alt="kunnect-brand-logo" className="knc-sideb-brand-logo" src={brandLogoWhite} />
        </div>
        <div className="knc-sideb-menus">{this.renderMenus(menus)}</div>
        <div className="knc-sideb-help-menus">{this.renderMenus(helpMenus)}</div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  /* Objects */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

Sidebar.defaultProps = {
};

export default withRouter(Sidebar);
