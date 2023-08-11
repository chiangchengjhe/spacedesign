import React from 'react';
import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client';

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
// After
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);

