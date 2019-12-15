import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'modules/notfound/NotFound.component';
import FeedContainer from 'modules/feed/Feed.container';
import KulusterContainer from 'modules/kuluster/Kuluster.container';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBan,
  faCaretSquareDown,
  faCaretSquareUp,
  faCheck,
  faChevronDown,
  faCheckCircle,
  faCog,
  faComment,
  faCommentAlt,
  faEllipsisH,
  faExclamationCircle,
  faFlag,
  faList,
  faPlusSquare,
  faReply,
  faSave,
  faShare,
  faSignOutAlt,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
  faClone,
  faCommentAlt as farCommentAlt,
  faFlag as farFlag,
  faQuestionCircle,
} from '@fortawesome/free-regular-svg-icons';
import SidebarContainer from 'components/sidebar/Sidebar.container';
import NotificationsContainer from 'modules/notifications/Notifications.container';
import MessagesContainer from 'modules/messages/Messages.container';
import TopbarContainer from 'components/topbar/Topbar.container';

library.add(
  faBan,
  faBell,
  faCaretSquareDown,
  faCaretSquareUp,
  faCheck,
  faCheckCircle,
  faChevronDown,
  faClone,
  faCog,
  faComment,
  faCommentAlt,
  farCommentAlt,
  faEllipsisH,
  faExclamationCircle,
  faFlag,
  farFlag,
  faList,
  faQuestionCircle,
  faPlusSquare,
  faReply,
  faSave,
  faShare,
  faSignOutAlt,
  faTimes,
  faTrash,
);

class App extends Component {
  render() {
    return (
      <div className="knc-app-module">
        <div className="knc-app-sidebar-container"><SidebarContainer /></div>
        <div className="knc-app-rest-container">
          <div className="knc-app-topbar-container">
            <TopbarContainer />
          </div>
          <div className="knc-app-content-container">
            <div className="knc-app-content">
              <Switch>
                <Route exact path="/feed" component={FeedContainer} />
                <Route path="/k/:kulusterName" component={KulusterContainer} />
                <Route exact path="/notifications" component={NotificationsContainer} />
                <Route exact path="/messages" component={MessagesContainer} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
