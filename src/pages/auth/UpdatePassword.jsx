import React, { useState } from "react";
import { useNavigate } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import Icons from "../../assets/image";
import { FiEye, FiEyeOff } from "react-icons/fi";

const UpdatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    alert("Password reset successful!");
    navigate("/"); // redirect to sign in
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bgClr px-4">
      <div className="authContainer">
         {/* logo section  */}
      <div className="flex justify-center mb-10.5">
          <img
            src={Icons.navLogo}
            alt="logo"
            className="w-[130px] h-[130px] rounded-3xl"
          />
        </div>

        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-x-3">
            <button
              onClick={() => navigate("/otp")}
              className="text-[#1F1D1D] cursor-pointer"
            >
              <IoArrowBack size={22} />
            </button>
            <h2 className="text-2xl font-medium text-[#1F1D1D]">
              Reset Password
            </h2>
          </div>
        </div>

        <p className="text-textClr mb-6 text-center">
          Your password must be 8-10 character long.
        </p>

        <form onSubmit={handleReset}>
          <div className="relative">
            {/* <label className="block text-gray-700 text-sm mb-1">
              New Password
            </label> */}
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              className="form-control mb-6"
            />
            <span
              className="absolute right-3 top-4.5 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye/>}
            </span>
          </div>

          <div className="relative">
            {/* <label className="block text-gray-700 text-sm mb-1">
              Confirm Password
            </label> */}
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm new password"
              className="form-control"
            />
            <span
              className="absolute right-3 top-4.5 cursor-pointer text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <button
            type="submit"
            className="authButton my-6"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
