import * as React from 'react';
import './SideMenu.css';

const logo = require('./logo.svg');

class SideMenu extends React.Component<{}, {}> {
  render() {
    return (
      <div className="SideMenu">
        <div className="logo">
            <h1>Nexus</h1>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="items-list">
            <div className="item">
                <h3>Item 1</h3>
            </div>
            <div className="item">
                <h3>Item 2</h3>
            </div>
            <div className="item">
                <h3>Item 3</h3>
            </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;