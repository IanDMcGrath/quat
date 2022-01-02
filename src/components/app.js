import React from 'react';
import Hud from './canvas/hud';
import ThreeCanvas from './canvas/three-canvas';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <div id="viewport">
          <ThreeCanvas />
          <Hud />
        </div>
      </div>
    );
  }
}

export default App;