import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList } from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
  faCommentAlt,
  faFlag,
  faQuestionCircle,
} from '@fortawesome/free-regular-svg-icons';
import brandLogoWhite from 'common/assets/logo_white.png';

library.add(faList, faBell, faCommentAlt, faFlag, faQuestionCircle);

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
    <div className="knc-sideb-menu" key={`knc-sideb-menu-${index}`}>
      <FontAwesomeIcon icon={menu.icon} />
    </div>
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
};

Sidebar.defaultProps = {
};

export default Sidebar;
