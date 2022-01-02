import * as THREE from 'three';
import ThreeCanvas from './canvas/three-canvas';

export const RENDERER = new THREE.WebGLRenderer({
  canvas: <ThreeCanvas />
});

RENDERER.setSize(sizes.width, sizes.height);
RENDERER.setPixelRatio(Math.min(window.devicePixelRatio, 2));

export const SCENE = new THREE.Scene();

export const CAMERA = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
SCENE.add(CAMERA);

const SIZES = {
  width: Util.clampFMax(window.innerWidth, 1200),
  height: Util.clampFMax(window.innerHeight, 700)
};

CAMERA.aspect = SIZES.width / SIZES.height;
CAMERA.updateProjectionMatrix();

RENDERER.setSize(SIZES.width, SIZES.height);
RENDERER.setPixelRatio(Math.min(window.devicePixelRatio, 2));

