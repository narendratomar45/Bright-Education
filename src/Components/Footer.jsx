import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white mt-5">
      <div className="container mx-auto px-5 flex justify-around flex-wrap gap-6 text-sm pt-4">
        <div>
          <h3 className="font-bold text-xl mb-3">About Us</h3>
          <ul className="space-y-1">
            <li className="hover:text-yellow-400 cursor-pointer">
              Director Message
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Our Mentors
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">Results</li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Rules & Regulation
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-3">Our Courses</h3>
          <ul className="space-y-1">
            <li className="hover:text-yellow-400 cursor-pointer">
              Beginner Level
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Intermediate Level
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Advanced Level
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li className="hover:text-yellow-400 cursor-pointer">
              Fee Structure
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Upcoming Batches
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Admission Process
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-3">About IAS Exam</h3>
          <ul className="space-y-1">
            <li className="hover:text-yellow-400 cursor-pointer">
              IAS Syllabus
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Exam Calendar
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">PYQS</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-3">Address & Contact</h3>
          <ul className="space-y-2">
            <li>Shalimar Garden Main Ext-2,</li>
            <li>New Delhi, 110088</li>
            <li className="flex items-center gap-2">
              <IoCall />
              <span>+91 987654321</span>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail />
              <span>xyzupsc123@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="font-semibold text-lg">Follow Us on Social Media</p>
        <div className="flex justify-center gap-5 mt-3">
          <FaFacebookSquare className="text-2xl text-blue-500 cursor-pointer" />
          <FaSquareInstagram className="text-2xl text-pink-500 cursor-pointer" />
          <FaSquareXTwitter className="text-2xl text-gray-400 cursor-pointer" />
          <GrYoutube className="text-2xl text-red-500 cursor-pointer" />
          <FaTelegram className="text-2xl text-blue-400 cursor-pointer" />
        </div>
      </div>
      <div className="text-sm mt-8 border-t border-gray-500  flex items-center justify-center">
        &copy; {new Date().getFullYear()} XYZ UPSC Academy. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
