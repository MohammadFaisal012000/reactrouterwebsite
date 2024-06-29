import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="flex justify-between py-12 gap-x-12 gap-y-0 mx-auto w-11/12 max-w-[1160px] h-full mt-7 mb-32 ">
      <div className="flex flex-col max-w-[450px] w-11/12 mb-6">
        <h1 className="text-white text-[1.85rem] font-semibold  leading-[2.375rem] ">
          {title}
        </h1>

        <p className="mt-3 w-full">
          <span className="text-[1rem] text-[#afb2bf] ">{desc1}</span>
          <br />
          <span className="text-[1rem] text-blue-400 italic ">{desc2}</span>
        </p>

        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center mt-6 gap-x-2">
          <div className="w-full h-[1px] bg-gray-700"></div>
          <div className="text-[#afb2bf] font-medium leading-[1.375rem]">
            OR
          </div>
          <div className="w-full h-[1px] bg-gray-700"></div>
        </div>
        <button className="flex justify-center items-center rounded-[8px] px-[12px] py-[8px] text-[#afb2bf] border border-[#808183] border-opacity-30 font-medium mt-6 gap-x-2 ">
          <FcGoogle />
          <p>Sign in with google</p>
        </button>
      </div>
      <div className="max-w-[450px] w-11/12 relative ">
        <img
          src={frameImage}
          alt="frame"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          className="absolute right-3 top-3"
          src={image}
          alt="image"
          width={558}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Template;
