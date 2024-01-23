import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { NavControllerProvider } from './ContextApi/NavController'
import './index.css'
import routes from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <NavControllerProvider>
  <RouterProvider router={routes}/>
  </NavControllerProvider>
  </React.StrictMode>,
)
