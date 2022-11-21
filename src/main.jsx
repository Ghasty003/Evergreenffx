import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { NavContextProvider } from './context/NavContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NavContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </BrowserRouter>
  </NavContextProvider>
)
