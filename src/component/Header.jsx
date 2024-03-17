import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" py-3 bg-slate-100">
      <div className="container">
        <div className="flex justify-between items-center">
          <span className="text-[#313131] font-bold  text-2xl"><NavLink  to="/">Fk</NavLink></span>
          <Navbar />
        </div>
      
      </div>
    </div>
  );
};

export default Header;
