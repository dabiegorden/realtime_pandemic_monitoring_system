"use client";

import React from "react";
import { CiSearch, CiSettings } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { MdHelp } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="bg-white flex fixed w-full top-0 z-10 justify-between items-center py-4 px-4">
      <div className="left">
        <form className="flex items-center shadow-sm rounded-md form___input">
          <input className="" type="text" placeholder="Search..." />
          <CiSearch className="cursor-pointer search_icon" size={24} />
        </form>
      </div>
      {/* <div className="flex items-center gap-4 cursor-pointer">
        <IoNotifications
          size={30}
          className="bg-orange-600 text-white py-2 px-2 b__radious"
        />
        <MdHelp
          size={30}
          className="bg-orange-600 text-white py-2 px-2 b__radious"
        />
        <CiSettings
          size={35}
          className="bg-orange-600 text-white py-2 px-2 b__radious"
        />
      </div> */}
    </nav>
  );
};

export default Nav;
