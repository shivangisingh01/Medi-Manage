import React, { useEffect, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Appointment from "./pages/Appointment";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import { Context } from "./main";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <>
        <Navbar />
        <Home />,
      </>
    ),
  },
  {
    path: "appointment",
    element: 
    
    // <Navbar />
   ( <Appointment />

   ),
    
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);
function App() {

//  http://localhost:6005/api/auth/fetch", {
     
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
