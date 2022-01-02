# Quaternion Visualizer

## Description
this is an app to help understand quaternions, what they are, how they behave, what they are used for

## MVPs
1. Rendering with Three.js
  * Quaternions are cool when rendered in 2D but they make much more sense rendering in 3D. I'll be making this without any boilerplate with Three.js and React.js to try to lighten the HTML file rather than when I first built the machblitz game.

2. Orientation Objects (.obj)
  * A selection of different objects to help understand Quaternions
    1. Arrows pointed in relative axes
    2. An airplane or spaceship to illustrate yaw, pitch, roll

3. UI
  * On screen controls to make calculations of quaternions
    1. manually input quaternion values
    2. normalize
    3. multiply together with another quaternion to rotate
    4. apply quaternion as a rate over time
    5. add new functions in future
      1. interp between two quaternions
      2. slerp (sphereical interpolation)

4. Eulers
  * switch to euler rotations to illustrate the difference in behavior when adding eulers together versus quaternions



