import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from 'routes';
import 'App.css';

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}