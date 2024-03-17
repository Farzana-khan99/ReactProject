import React from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <nav>
      <ul className="md:flex gap-4  items-center hidden text-[#555252] font-medium">
        <li className="hover:text-[#a749ff]  transition-all">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-[#a749ff]  transition-all">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="hover:text-[#a749ff] relative  transition-all">
          <NavLink to="/service" className="flex items-center gap-1 ">Services<RiArrowDropDownLine className="text-2xl" />
          <NavMenu/>
           </NavLink>
        </li>
        <li className="hover:text-[#a749ff]  transition-all">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
