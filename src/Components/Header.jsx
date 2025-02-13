import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";

const date = new Date().toLocaleDateString("en-GB");

const Header = () => {
  return (
    <div className="bg-green-700 text-white font-medium p-1">
      <div className="container mx-auto flex flex-wrap items-center justify-center md:justify-between gap-3 text-sm md:text-base">
        <div className="flex items-center gap-2">
          <CiCalendarDate className="text-lg md:text-xl text-yellow-300" />
          <p>{`New batch starts from ${date}`}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-lg md:text-xl text-yellow-300" />
          <p>Shalimar Garden Main Ext-2</p>
        </div>

        <div className="flex items-center gap-2">
          <BiSolidPhoneCall className="text-lg md:text-xl text-yellow-300" />
          <p className="hover:text-yellow-400 cursor-pointer">
            Contact No. <span className="font-semibold">+91 987654321</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
