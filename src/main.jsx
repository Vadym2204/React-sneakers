import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Favorites from './pages/Favorites'
import { AppProvider } from './AppContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/Favorites',
    element: <Favorites/>,
    errorElement: <div>404 Not Found</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router}/>
    </AppProvider>
  </React.StrictMode>
)
