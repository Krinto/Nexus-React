import * as React from 'react';
import './App.css';
import SideMenu from './side-menu/SideMenu';
import Content from './content/Content';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <SideMenu />
        <Content url="http://192.168.1.22:8989" />
      </div>
    );
  }
}

export default App;
