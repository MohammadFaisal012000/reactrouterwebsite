import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [accountType, setAccountType] = useState("student");
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password are not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account created Successfully");

    const account = { ...formData };
    console.log("Printing the all data");
    console.log(account);

    navigate("/dashboard");
  }

  return (
    <div>
      {/* Instructor and student */}
      <div className="flex bg-[#161d29] p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-black text-white "
              : "bg-transparent text-gray-400"
          } rounded-full py-2 px-5 transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-black text-white "
              : "bg-transparent text-gray-400"
          } rounded-full  py-2 px-5  transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex justify-between items-center ">
          <label>
            <p className="text-[0.875rem] text-[#f1f2ff] gap-2 mt-4 mb-1 ">
              First Name <sup className="text-pink-800 text-[0.875rem]">*</sup>
            </p>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
              required
              className="w-full text-[#f1f2ff] bg-[#161d29] p-[12px] rounded-[0.5rem]"
            />
          </label>
          <label>
            <p className="text-[0.875rem] text-[#f1f2ff] gap-2 mt-4 mb-1 ">
              Last Name <sup className="text-pink-800 text-[0.875rem]">*</sup>
            </p>
            <input
              type="text"
              required
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="EnterLast Name"
              className="w-full text-[#f1f2ff] bg-[#161d29] p-[12px] rounded-[0.5rem]"
            />
          </label>
        </div>

        <label>
          <p className="text-[0.875rem] text-[#f1f2ff] gap-2 mt-4 mb-1 ">
            Email Address <sup className="text-pink-800 text-[0.875rem]">*</sup>
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
        <div className="flex justify-between mt-3">
          <label className="relative">
            <p className="text-[0.875rem] text-[#f1f2ff] gap-2 mt-4 mb-1 ">
              Create Password{" "}
              <sup className="text-pink-800 text-[0.875rem]">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              required
              className="w-full text-[#f1f2ff] bg-[#161d29] p-[12px] rounded-[0.5rem]"
            />
            <span
              className="absolute right-3 top-[54px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="relative">
            <p className="text-[0.875rem] text-[#f1f2ff] gap-2 mt-4 mb-1 ">
              Confirm Password{" "}
              <sup className="text-pink-800 text-[0.875rem]">*</sup>
            </p>
            <input
              type={showPassword1 ? "text" : "password"}
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              required
              className="w-full text-[#f1f2ff] bg-[#161d29] p-[12px] rounded-[0.5rem]"
            />
            <span
              className="absolute right-3 top-[54px] cursor-pointer"
              onClick={() => setShowPassword1((prev) => !prev)}
            >
              {showPassword1 ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="w-full bg-yellow-400 text-[#000814] font-medium mt-8 rounded-[8px] px-[12px] py-[8px] cursor-pointer">
          Create Acount
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
