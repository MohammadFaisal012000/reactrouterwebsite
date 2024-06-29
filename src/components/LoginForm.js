import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Log In");
    navigate("/dashboard");
  }
  return (
    <div className=" flex flex-col mt-5 ">
      <form onSubmit={submitHandler}>
        <label>
          <p className="text-[0.875rem] text-[#f1f2ff] gap-2 mt-4 mb-1 ">
            Email Address <sup className="text-pink-800 text-[0.675rem]">*</sup>
          </p>
          <input
            type="email"
            required
            value={formData.email}
            onChange={changeHandler}
            name="email"
            placeholder="Enter Email Address"
            className="w-full text-[#f1f2ff] bg-[#161d29] p-[12px] rounded-[0.5rem]"
          />
        </label>
        <label className="relative w-full">
          <p className="text-[0.875rem] text-[#f1f2ff] gap-2 mt-4 mb-1 ">
            Password <sup className="text-pink-800 text-[0.675rem]">*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            onChange={changeHandler}
            name="password"
            placeholder="Enter Password"
            className="w-full text-[#f1f2ff] bg-[#161d29] p-[12px] rounded-[0.5rem]"
          />
          <span
            className="absolute right-3 top-[88px] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <p className="text-blue-500 float-end text-[0.875rem]">
            Forget Password
          </p>
        </label>
        <button className="w-full bg-yellow-400 text-[#000814] font-medium mt-6 rounded-[8px] px-[12px] py-[8px] cursor-pointer">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
