import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from 'components/sidebar/Sidebar.component';
import Topbar from 'components/topbar/Topbar.component';
import NotFound from 'modules/notfound/NotFound.component';
import FeedContainer from 'modules/feed/Feed.container';

class App extends Component {
  render() {
    return (
      <div className="knc-app-module">
        <div className="knc-app-sidebar-container"><Sidebar /></div>
        <div className="knc-app-rest-container">
          <div className="knc-app-topbar-container">
            <Topbar />
          </div>
          <div className="knc-app-content-container">
            <div className="knc-app-content">
              <Switch>
                <Route exact path="/feed" component={FeedContainer} />
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
