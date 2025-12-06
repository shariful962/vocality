import React, { useState } from "react";
import { useNavigate } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import Icons from "../../assets/image";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMsg("");
  };

  //send otp functionality
  const handleSendOtp = (e) => {
    e.preventDefault();
    if(!formData.email){
      setErrorMsg("Please enter the email");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg("Please enter a valid email");
      return;
    }
    console.log(formData)
    //sent otp logic
    navigate("/otp");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bgClr px-4">
      <div className="authContainer">
        {/* logo section  */}
        <div className="flex justify-center mb-6">
          <img
            src={Icons.navLogo}
            alt="logo"
            className="w-[130px] h-[130px] rounded-3xl"
          />
        </div>

        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-x-3">
            <button
              onClick={() => navigate("/")}
              className="text-dark2 cursor-pointer"
            >
              <IoArrowBack size={22} />
            </button>
            <h2 className="text-2xl font-semibold text-dark2">
              Forgot Password
            </h2>
          </div>
        </div>

        <p className="authDesc">
          Enter your email below to reset your password
        </p>

        <form onSubmit={handleSendOtp}>
          <div>
            <label className="label-control">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="xyz@gmail.com"
              className="form-control"
            />
          </div>

          <button type="submit" className="authButton my-6">
            Send OTP
          </button>
          {errorMsg && (
            <p className="text-red-500 text-sm mt-[-10px]">{errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
