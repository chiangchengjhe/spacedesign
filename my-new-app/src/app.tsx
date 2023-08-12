import React from 'react';
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from '@mui/joy/styles';
import Dashboard from './Dashboard'



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

