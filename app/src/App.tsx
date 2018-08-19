import * as React from 'react';
import './App.css';
import Content from './content/Content';
import SideMenu from './side-menu/SideMenu';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="App">
        <SideMenu />
        <Content url="http://192.168.1.22:8989" />
      </div>
    );
  }
}

export default App;
