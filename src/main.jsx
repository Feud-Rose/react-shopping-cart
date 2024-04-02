import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Router from './components/Router/Router.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <App />
  </Router> 

  </React.StrictMode>,
)
