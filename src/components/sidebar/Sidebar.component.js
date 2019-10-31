import React, { Component } from 'react';
import PropTypes from 'prop-types';
import brandLogoGray from 'common/assets/logo_gray.png'

const menus = [
  {
    url: '/feed',
    icon: 'blabla',
  }, {
    url: '/messages',
    icon: 'test',
  }, {
    url: '/notifications',
    icon: 'notif',
  },
];

class Sidebar extends Component {
  renderMenu = (menu, index) => {
    return (
      <div className="knc-sideb-menu" key={`knc-sideb-menu-${index}`}>{menu.url}</div>
    );
  }

  renderMenus = menuList => menuList.map((menu, index) => this.renderMenu(menu, index));

  render() {
    return (
      <div className="knc-sideb-component">
        <div className="knc-sideb-brand-logo-container">
          <img alt="kunnect-brand-logo" className="knc-sideb-brand-logo" src={brandLogoGray} />
        </div>
        <div className="knc-sideb-menus">{this.renderMenus(menus)}</div>
      </div>
    );
  }
}

Sidebar.propTypes = {
};

Sidebar.defaultProps = {
};

export default Sidebar;
