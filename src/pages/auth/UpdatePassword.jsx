import React, { useState } from "react";
import { useNavigate } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import Icons from "../../assets/image";
import { FiEye, FiEyeOff } from "react-icons/fi";

const UpdatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errorMsg, setErrorMsg] = useState("")
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  })
  const navigate = useNavigate();

  const handleChange = (e)=> {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMsg("");
  }

  const handleReset = (e) => {
    e.preventDefault();
     const { password, confirmPassword } = formData;

    if (!password || !confirmPassword) {
      setErrorMsg("Please fill in both fields");
      return;
    }


    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    alert("Password reset successful!");
    navigate("/");
  
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
              className="text-dark2 cursor-pointer"
            >
              <IoArrowBack size={22} />
            </button>
            <h2 className="text-2xl font-medium text-dark2">
              Create New Password
            </h2>
          </div>
        </div>

        <p className="authDesc">
          Your new password must be different from previous passwords.
        </p>

        <form onSubmit={handleReset}>
          <div className="relative">
            <label className="label-control">
              New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter new password"
              className="form-control mb-6"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye/>}
            </span>
          </div>

          <div className="relative">
            <label className="label-control">
              Confirm Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              className="form-control"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
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
           {errorMsg && (
            <p className="text-red-500 text-sm mt-[-10px]">{errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
