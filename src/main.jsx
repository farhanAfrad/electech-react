import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './components/routes/Routes'
import AuthProvider from './components/authProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={Routes}></RouterProvider>
    </React.StrictMode>
  </AuthProvider>
  ,
)
