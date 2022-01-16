
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { unAuthorizedRoutes } from './configs/routes.config';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        {renderRoutes(unAuthorizedRoutes)}
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
