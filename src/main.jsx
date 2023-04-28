/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import Providers from './Components/Providers/AuthProviders.jsx';
import AuthProviders from './Components/Providers/AuthProviders.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children :[
      {path:'/' , element: <Home></Home>},
      {path:'login' , element:<Login></Login>},
      {path:'signUp' , element:<Register></Register>},
      {path:'contactUs' , element:<ContactUs></ContactUs>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
