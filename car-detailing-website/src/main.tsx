// Main React and DOM Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
// Named export for App component
import { App } from './App' // important: curly braces match your export
// Enabling global styles for project
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
