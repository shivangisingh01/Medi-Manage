import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    gender: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleRegistration = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post(
        "http://localhost:6005/api/auth/register",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
  
      // Success case
      toast.success(res.data.message);
      setIsAuthenticated(true);
  
      // Clear form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        dob: "",
        gender: "",
        password: "",
      });

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
  
    } catch (error) {
      // Error case
      toast.error(error.response.data.message);
    }
  };


  return (
    <>
      <div className="container form-component register-form w-3/4">
        <h1 className="text-5xl">Welcome</h1> 
        <p className="text-xl">Let us know more about yourself</p>
        <h4 className="text-lg">
          Personal Information
        </h4>
        <form onSubmit={handleRegistration}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type={"date"}
              placeholder="Date of Birth"
              name="dob"
              value= {formData.dob}
              onChange={handleChange}
            />
          </div>
          <div>
            <select value={formData.gender} name="gender" onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Already Registered?</p>
            <Link
              to={"/signin"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Login Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit" className="text-2xl">Register</button>
            <ToastContainer position="top-center"/>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;