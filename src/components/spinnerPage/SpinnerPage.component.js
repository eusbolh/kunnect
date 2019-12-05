import React, { Component } from 'react';
import { Spinner } from '@blueprintjs/core';

class SpinnerPage extends Component {
  render() {
    return (
      <div className="knc-spinnerpage-component">
        <Spinner
          intent="primary"
          size={48}
        />
      </div>
    );
  }
}

export default SpinnerPage;
