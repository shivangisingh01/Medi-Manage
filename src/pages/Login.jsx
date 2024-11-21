import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Context } from "../main";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const {isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { 
        email, 
        password 
      });
    
          // Get the token from the backend response
          localStorage.setItem("jwtToken", response.data.token);

          setIsAuthenticated(true);
          setUser(response.data.user);

          toast.success("Login successful!");
          setTimeout(() => {
            navigate("/"); // Redirect after login
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
