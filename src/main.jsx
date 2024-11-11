import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import AuthProvider from './component/Provider/AuthProvider';
import Order from './component/Order';
import PrivateRoute from './component/Route/PrivateRoute';
import Shopping from './component/Shopping';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path:"/order",
        element:<PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path:"shopping",
        element:<PrivateRoute><Shopping></Shopping></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
)
