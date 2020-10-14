import React from '../Reactjs-Residentes-1/src/react';
import ReactDOM from '../Reactjs-Residentes-1/src/react-dom';
import './index.css';
import App from './App.jsx';

import { BrowserRouter } from '../Reactjs-Residentes-1/src/react-router-dom' 

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
