import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingMedical} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

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
      <nav className={"container"}>
        <div className="logo">
          {/* <img src="/logo.png" alt="logo" className="logo-img" /> */}
          <h1 className="text-3xl"> <span className="text-purple font-bold"><FontAwesomeIcon icon={faHandHoldingMedical} />Medi</span>Manage</h1>
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links text-2xl">
            <Link to={"/"} onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link to={"/appointment"} onClick={() => setShow(!show)}>
              Appointment
            </Link>
            <Link to={"/about"} onClick={() => setShow(!show)}>
              About Us
            </Link>
          </div>
          {isAuthenticated ? (
            <button className=" btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="bg-white btn text-2xl" onClick={goToLogin}>
              Login
            </button>
          )}
          <button className="bg-violet btn text-2xl" onClick={goToRegister}>
              Register
            </button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;