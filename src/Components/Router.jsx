import React from 'react'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = () => {
    
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element:<Login/>
        },
    
        ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Router
