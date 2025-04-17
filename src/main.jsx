import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// JQuery
import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// main.js
import './assets/js/main.js';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
