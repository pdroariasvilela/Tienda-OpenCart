import React from 'react'
import ReactDOM from 'react-dom/client'
// import MainApp from './Context/MainApp'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>

  {/* //<React.StrictMode> */}
    <App />
  {/* //</React.StrictMode> */}
  
  </BrowserRouter>
)
