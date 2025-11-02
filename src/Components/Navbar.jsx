import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { Github } from 'lucide-react';

const Navbar = () => {

  return (
    <div className="shadow-lg">
      <div className="container mx-auto navbar bg-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="font-semibold mr-2">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="font-semibold mr-2">
                <NavLink to="/apps">Apps</NavLink>
              </li>
              <li className="font-semibold mr-2">
                <NavLink to="/installation">Installation</NavLink>
              </li>
            </ul>
          </div>
          <div className="text-2xl font-semibold text-[#632EE3] flex items-center">
            <img className="w-8" src={logo} alt="" />
            <Link to="/">Appify.io</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-semibold mr-2">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="font-semibold mr-2">
                <NavLink to="/apps">Apps</NavLink>
              </li>
              <li className="font-semibold mr-2">
                <NavLink to="/installation">Installation</NavLink>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="https://github.com/Mohammad-Rofikul-Islam-Hasan" target="_blank" className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"> <Github /> Contribution</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
