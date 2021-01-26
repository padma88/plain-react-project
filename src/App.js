import './App.css';
import Blog from './Container/Blog/Blog';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Blog/>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
