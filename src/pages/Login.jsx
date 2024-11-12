import axios from "axios";
import React, { useContext, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../main";
import { Link } from "react-router-dom";

const Login = () => {
  const { setIsAuthenticated, setUser } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:6005/api/auth/login", { 
        email, 
        password 
      });
    
          // Get the token from the backend response
          localStorage.setItem("jwtToken", response.data.token);

          setIsAuthenticated(true);
          setUser(response.data.user);

          toast.success("Login successful!");
          setTimeout(() => {
            window.location.href = "/"; // Redirect after login
          }, 1000);
    
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage); // Display error toast
    }
  };

  return (
    <>
      <div className="container form-component login-form w-2/4">
        <h1 className="text-5xl">Sign In</h1>
        <p className="text-xl">Please Login To Continue</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
          voluptas expedita itaque ex, totam ad quod error?
        </p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p className="mb-0">Not Registered?</p>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "#271776ca" }}
              className=""
            >
              Register Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit" className="text-3xl">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
