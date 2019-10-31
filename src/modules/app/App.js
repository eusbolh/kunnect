import React, { Component } from 'react';
import Sidebar from 'components/sidebar/Sidebar.component';
import Topbar from 'components/topbar/Topbar.component';

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
            content
          </div>
        </div>
      </div>
    );
  }
}

export default App;
