import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Main/Home';
// import About from './Components/About/About';
import Root from './Components/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
     { path: "/",
      element: <Home></Home>}
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
