import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
// import { Context } from "../main";
import { AuthContext } from "../AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingMedical} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:6005/api/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };
  const goToRegister = () => {
    navigateTo("/register");
  };

  return (
    <>

    <nav className="bg-[#F9F2E4] text-black px-4 py-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
        <FontAwesomeIcon icon={faHandHoldingMedical} />
          MediManage
        </div>
        
        {/* Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to={"/"} onClick={() => setShow(!show)} className="hover:text-blue-200 text-lg">Home</Link>
          <Link to={"/appointment"} onClick={() => setShow(!show)} className="hover:text-blue-200">Appointment</Link>
          <Link to={"/about"} onClick={() => setShow(!show)} className="hover:text-blue-200">About Us</Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
        {isAuthenticated ? (
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100" onClick={handleLogout}>
              Logout
            </button>
          ) : (
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100" onClick={goToLogin}>Login</button>
          )}
          <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-400" onClick={goToRegister}>Register</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={() => setShow(!show)}>☰</button>
        </div>
      </div>
    </nav>

    </>
  );
};

export default Navbar;