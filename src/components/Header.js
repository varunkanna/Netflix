import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex p-5 items-center justify-between bg-transparent sticky top-0 z-50 mx-5">
      <div className="part01 flex items-center justify-center gap-4 cursor-pointer">
        <h1 className="text-white">Netflix</h1>
        <ul className="md:flex tems-center justify-center gap-3 text-white max-[769px]:hidden">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="part02 flex items-center justify-center gap-4 text-white cursor-pointer">
        <CiSearch className="max-[769px]:hidden"/>
        <a className="max-[769px]:hidden">Child</a>
        <IoMdNotificationsOutline className="max-[769px]:hidden" />
        <FaUser />
      </div>
    </div>
  );
};

export default Header;
