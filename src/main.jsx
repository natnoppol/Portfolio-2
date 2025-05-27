//react
import React from 'react'
//react-dom
import { StrictMode } from 'react'
//react-dom/client
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
