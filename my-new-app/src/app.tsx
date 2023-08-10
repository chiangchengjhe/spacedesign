import React from 'react';
import * as ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div id="canvas-container">
        <Canvas>
        <ambientLight  />
        <directionalLight  position={[0, 0, 5]} />
        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
        </Canvas>
    </div>
  )
}


function render() {
  ReactDOM.render(<App/>, document.body);
}

render();