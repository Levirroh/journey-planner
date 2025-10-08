import { StrictMode } from 'react'
import {createRoot} from "react-dom/client";
import { createBrowserRouter, RouterProvider  } from "react-router-dom";

import './index.css'

import App from './App.tsx'
import Welcome from './Pages/Welcome.tsx'
import Register from './Pages/Register.tsx'
import Login from './Pages/Login.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Welcome/>},
      {path: "/register", element: <Register/>},
      {path: "/login", element: <Login/>},
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)