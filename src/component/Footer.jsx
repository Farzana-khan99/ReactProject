import React from "react";

import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#f6f6f8] py-12">
        <div className="container">
          <div className=" grid  grid-cols-4 gap-2 ">
            <div className="">
              <h3 className="text-[#313131] font-bold">FOLLOW US</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <h3 className="text-[#313131] font-bold">ABOUT US</h3>
              <ul className="leading-10  text-[#555252] font-medium">
                <li className="hover:text-[#a749ff]  transition-all">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="hover:text-[#a749ff]  transition-all">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="hover:text-[#a749ff]  transition-all">
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li className="hover:text-[#a749ff]  transition-all">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#313131] font-bold">FOLLOW US</h3>
              <ul className="leading-10  text-[#555252] font-medium">
                <li className="hover:text-[#a749ff]  transition-all">
                  <NavLink to="/">Facebook</NavLink>
                </li>
                <li className="hover:text-[#a749ff]  transition-all">
                  <NavLink to="/about">Instagram</NavLink>
                </li>
                <li className="hover:text-[#a749ff]  transition-all">
                  <NavLink to="/services">linkeden</NavLink>
                </li>
                <li className="hover:text-[#a749ff]  transition-all">
                  <NavLink to="/services">GitHub</NavLink>
                </li>
              </ul>
            </div>
            
            <div>
            <p className="text-[#313131] font-bold">Get E-mail updates about our latest shop and special offers.</p>
            <form action="" className=" pt-2">
              <input placeholder="Enter your email here.." className=" w-full  block py-2 bg-transparent outline-none  border-b-2 border-spacing-2" type="text" />
              <button className=" py-2 text-[#a749ff] font-bold">Subscribe</button>
            </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
