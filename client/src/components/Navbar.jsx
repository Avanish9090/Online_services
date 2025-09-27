import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/images/path.png";

function Navbar() {
  return (
    <>
      <div>
        <div className="navbar bg-sky-600 shadow-lg">
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-inter"
              >
                <li>
                  <a>HOME</a>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={500}>
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link to="products" smooth={true} duration={500}>
                    PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link to="services" smooth={true} duration={500}>
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500}>
                    CONTACTS
                  </Link>
                </li>
              </ul>
            </div>
            <img className="h-8 md:ml-20" src={logo} alt="logo" />
            <p className="font-inter text-xl text-red-800">SHOP</p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="text-xl menu menu-horizontal px-1 font-inter">
              <li>
                <a>HOME</a>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="products" smooth={true} duration={500}>
                  PRODUCTS
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500}>
                  SERVICES
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <label className="input rounded-4xl w-60 md:mr-20">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                className="font-inter"
                type="search"
                required
                placeholder="Search.."
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
