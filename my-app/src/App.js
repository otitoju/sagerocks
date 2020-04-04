import React from 'react';
import { Route } from 'react-router-dom'
import Router from './router'

function App() {
  return (
    <div className="App">
        <Route component={Router} />
    </div>
  );
}

export default App;
