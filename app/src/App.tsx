import * as React from 'react';
import { ReactNode } from "react";

import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {

  public render(): ReactNode {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
