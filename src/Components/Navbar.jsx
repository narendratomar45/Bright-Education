import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="  flex justify-around items-center p-4 bg-blue-950 text-white ">
      <div>logo</div>
      <div className="flex justify-around gap-10 items-center  max-sm:hidden">
        <div className="hover:text-yellow-500">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="hover:text-yellow-500">
          <Link to={"/aboutUS"}>About Us</Link>
        </div>
        <div className="hover:text-yellow-500">
          <Link to={"/ourCourses"}>Our Courses</Link>
        </div>
        <div className="hover:text-yellow-500">
          <Link to={"/contactUs"}>Contact Us</Link>
        </div>
        <div className="hover:text-yellow-500">
          <Link to={"/login"}>Login</Link>
        </div>
        <div className="bg-yellow-500 text-black p-2 rounded font-bold">
          <Link to={"/signUp"}>Join for Free</Link>
        </div>
      </div>
      <div className="relative md:hidden max-sm:block" onClick={handleMenu}>
        <GiHamburgerMenu />
      </div>
      {isMenuOpen && (
        <div className=" absolute bg-white text-black  top-[135px] left-0 z-20 p-4 space-y-6 shadow-xl">
          <div className="hover:bg-blue-900 text-center hover:text-yellow-500 rounded hover:font-medium px-2 py-1 ">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="hover:bg-blue-900 text-center hover:text-yellow-500 rounded hover:font-medium px-2 py-1">
            <Link to={"/aboutUS"}>About Us</Link>
          </div>
          <div className="hover:bg-blue-900 text-center hover:text-yellow-500 rounded hover:font-medium px-2 py-1">
            <Link to={"/ourCourses"}>Our Courses</Link>
          </div>
          <div className="hover:bg-blue-900 text-center hover:text-yellow-500 rounded hover:font-medium px-2 py-1">
            <Link to={"/contactUs"}>Contact Us</Link>
          </div>
          <div className="hover:bg-blue-900 text-center hover:text-yellow-500 rounded hover:font-medium px-2 py-1">
            <Link to={"/login"}>Login</Link>
          </div>
          <div className="bg-blue-900 text-center text-yellow-500 rounded font-medium px-2 py-1">
            <Link to={"/signUp"}>Join for Free</Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
