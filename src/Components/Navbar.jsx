import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-[2rem] items-center">
      <div className="flex items-center justify-center ml-[6rem]">
        <img src={logo} alt="logo" className="w-15 cursor-pointer" />
        <h2 className="mx-[4rem] font-display text-4xl cursor-pointer">
          emote
        </h2>
      </div>

      <div className=" flex justify-between gap-10 items-center">
        <div className="bg-neutral-600 rounded-3xl p-2">
          <ul className="flex w-full justify-evenly ">
            <Link to="/">
              <li className="mx-8 text-white cursor-pointer hover:text-black text-lg font-display">
                Home
              </li>
            </Link>

            <Link to="/mood">
              <li className="mx-8 text-white cursor-pointer hover:text-black text-lg font-display">
                Mood{" "}
              </li>
            </Link>
            <Link to="/explore">
              <li className="mx-8 text-white cursor-pointer hover:text-black text-lg font-display">
                Explore
              </li>
            </Link>
            <Link to="/friends">
              <li className="mx-8 text-white cursor-pointer hover:text-black text-lg font-display">
                Friends
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <Link to="/login">
            <button
              type="submit"
              className="bg-[#7e5c0c] font-display text-white p-3 rounded-[5rem]"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
