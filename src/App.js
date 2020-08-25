import React, { Component } from 'react';
import Topbar from './components/Topbar';

import './App.css';
import Stories from './components/Stories';
import Suggest from './components/Suggest';
import Wall from './components/Wall';

class App extends Component {
  render() {
    return (
      <>
        <Topbar />
        <div className="body--container">
        <Suggest />
        <Stories />
        <Wall />
        </div>
      </>
    );
  }
}
export default App;
