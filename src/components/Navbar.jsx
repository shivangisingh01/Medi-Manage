import React, { useContext, useState , useEffect, useRef  } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
// import { Context } from "../main";
import { AuthContext } from "../AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const handleLogout = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/logout`, {
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
    {/* bg-[#F9F2E4] */}
      <nav className=" text-black px-4 py-3 font-semibold">
        <div className="container mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <FontAwesomeIcon icon={faHandHoldingMedical} />
            MediManage
          </div>













          <div ref={menuRef} className={`${isOpen ? "flex flex-col absolute -top-4 -right-6 overflow-visible border-spacing-6 bg-white rounded-lg w-2/5" : "flex flex-row justify-between"} md:w-3/4 text-lg`}>
            <div
              className={`${
                isOpen
                  ? "flex flex-col  items-center"
                  : "hidden"
              } md:flex space-x-6 pt-3`}
              >
              <Link
                to={"/"}
                onClick={() => setIsOpen(!isOpen)}
                className= "hover:text-blue-200"
              >
                Home
              </Link>
              <Link
                to={"/appointment"}
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-blue-200"
              >
                Appointment
              </Link>
              <Link
                to={"/about"}
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-blue-200"
              >
                About Us
              </Link>
              <Link
                to={"/about"}
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-blue-200"
              >
                Contact Us
              </Link>
              <Link
                to={"/report"}
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-blue-200"
              >
                Financial Report
              </Link>
            </div>








            {/* Buttons */}
            <div
              className={`${
                isOpen
                  ? "flex flex-col space-y-1 mx-auto"
                  : "hidden"
              } md:flex space-x-4 `}
            >
              {isAuthenticated ? (
                <button
                  className="bg-white mx-auto text-black-600 px-4 py-3 rounded hover:bg-blue-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="bg-white text-black-600 px-4 py-2 rounded hover:bg-blue-100"
                  onClick={goToLogin}
                >
                  Login
                </button>
              )}
              <button
                className="bg-green-500 px-4 py-2 rounded hover:bg-green-400 border-4"
                onClick={goToRegister}
              >
                Register
              </button>
            </div>


          </div>
















          {/* Mobile Menu Toggle */}
          <div ref={buttonRef} className="md:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
