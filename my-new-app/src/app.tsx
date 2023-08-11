import React from 'react';
import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from '@mui/joy/styles';
import Dashboard from './Dashboard'

function threecanvas(){
    return (
        <Canvas>
        <ambientLight  />
        <directionalLight  position={[0, 0, 5]} />
        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
        </Canvas>
    )

}

function App() {
  return (
    <React.StrictMode>
    <StyledEngineProvider injectFirst>
        <Dashboard/>
    </StyledEngineProvider>
  </React.StrictMode>
  )
}
// After
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);

