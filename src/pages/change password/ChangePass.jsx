import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

const ChangePass = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg("")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { oldPassword, newPassword, confirmPassword } = formData;

    if (newPassword.length < 8 || newPassword.length > 10) {
      setErrorMsg("Password must be 8–10 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMsg("New passwords do not match!");
      return;
    }

    // You can call your backend API here
    console.log("Password updated:", formData);
    navigate('/settings');
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <div className="authContainer">
        <div className="flex items-center mb-4">
          {/* <IoArrowBack className="text-xl mr-2 cursor-pointer" onClick={()=>navigate('/settings')} /> */}
          <h2 className="text-2xl text-[#1F1D1D] font-medium">Change Password</h2>
        </div>

        <p className="text-lg text-[#707070] mb-5">
          Your password must be 8–10 characters long.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Old Password */}
          <div>
            <label className="block  text-dark2 mb-1">
              Enter old password
            </label>
            <div className="relative">
             {!formData.oldPassword && (
                <FiLock className="absolute left-3 top-4 text-[#5C5C5C]" />
              )}
              <input
                type={showPassword.old ? "text" : "password"}
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                placeholder="Enter old password"
                className="form-control1 placeholder:pl-5.5 pl-12"
               
              />
              <span
                className="absolute right-3 top-4.5 text-[#5C5C5C] cursor-pointer"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, old: !prev.old }))
                }
              >
                {showPassword.old ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block  text-dark2 mb-1">
              Set new password
            </label>
            <div className="relative">
               {!formData.newPassword && (
                <FiLock className="absolute left-3 top-4 text-[#5C5C5C]" />
              )}
              <input
                type={showPassword.new ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Set new password"
                className="form-control1 placeholder:pl-5.5"
              />
              <span
                className="absolute right-3 top-4.5 text-[#5C5C5C] cursor-pointer"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, new: !prev.new }))
                }
              >
                {showPassword.new ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block  text-dark2 mb-1">
              Re-enter new password
            </label>
            <div className="relative">
               {!formData.confirmPassword && (
                <FiLock className="absolute left-3 top-4 text-[#5C5C5C]" />
              )}
              <input
                type={showPassword.confirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter new password"
                className="form-control1 placeholder:pl-5.5"
              />
              <span
                className="absolute right-3 top-4.5 text-[#5C5C5C] cursor-pointer"
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    confirm: !prev.confirm,
                  }))
                }
              >
                {showPassword.confirm ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          

          <button
            type="submit"
            className="mt-5  w-full bg-Primary/80 font-medium text-[#2F2F2F] py-3 rounded cursor-pointer transition-colors duration-300 hover:bg-Primary"
          >
            Update password
          </button>
          {errorMsg && (
            <p className="text-red-500 text-sm mt-[-10px]">{errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ChangePass;




