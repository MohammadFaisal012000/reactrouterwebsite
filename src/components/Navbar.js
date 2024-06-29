import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-between items-center mt-4 w-11/12 max-w-[1160px] mx-auto">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
        </Link>
      </div>

      <nav>
        <ul className="flex  gap-6">
          <li className="text-[#afb2bf] text-[1rem]">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#afb2bf] text-[1rem]">
            <Link to="/">About</Link>
          </li>
          <li className="text-[#afb2bf] text-[1rem]">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="text-[#afb2bf] text-[1rem] border px-[12px] py-[8px] bg-[#161d29] rounded-[8px] border-gray-700">
              Login
            </button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button className="text-[#afb2bf] text-[1rem] border px-[12px] py-[8px] bg-[#161d29] rounded-[8px] border-gray-700">
              Sign Up
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button
              className="text-[#afb2bf] text-[1rem] border px-[12px] py-[8px] bg-[#161d29] rounded-[8px] border-gray-700"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Log Out");
              }}
            >
              Log Out
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="text-[#afb2bf] text-[1rem] border px-[12px] py-[8px] bg-[#161d29] rounded-[8px] border-gray-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
