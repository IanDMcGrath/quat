import React from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const LOADING_MANAGER = new THREE.LoadingManager();
const GLTF_LOADER = new GLTFLoader(LOADING_MANAGER);

class ThreeCanvas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="three-canvas">Three Canvas</div>
    )
  }
}

export default ThreeCanvas;
