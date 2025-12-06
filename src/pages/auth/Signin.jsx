import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

import Icons from "../../assets/image";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("")
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMsg("")
  }

  //sign in functionality
  const handleSignin = (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password ){
      setErrorMsg("Please enter both email and password");
      return;
    }

    //signin logic
    navigate("/dashboard");
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
        {/* titile section  */}
        <h2 className="authTitle text-center mb-6">Log in to your account</h2>
        {/* form section  */}
        <form onSubmit={handleSignin}>
          {/* email field  */}
          <div>
            <label className="label-control">Email</label>
            <input
              type="email"
              name="email"
              placeholder="xyz@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="mb-6 form-control"
            />
          </div>
         {/* password field  */}
          <div className="relative">
            <label className="label-control">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control mb-3"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link
              to="/forgotpassword"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="authButton my-6">
            Sign In
          </button>
          {errorMsg && (
            <p className="text-red-500 text-sm mt-[-10px]">{errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signin;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router";

// import Icons from "../../assets/image";
// import { FiEye, FiEyeOff } from "react-icons/fi";

// const Signin = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({ email: false, password: false });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//     setErrors({
//       ...errors,
//       [e.target.name]: false,
//     });
//   };

//   //sign in functionality
//   const handleSignin = (e) => {
//     e.preventDefault();
//     const newErrors = {
//       email: !formData.email,
//       password: !formData.password,
//     };
//     setErrors(newErrors);

//     if (newErrors.email || newErrors.password) {
//       return;
//     }

//     //signin logic
//     navigate("/dashboard");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-bgClr px-4">
//       <div className="authContainer">
//         {/* logo section  */}
//         <div className="flex justify-center mb-10.5">
//           <img
//             src={Icons.navLogo}
//             alt="logo"
//             className="w-[130px] h-[130px] rounded-3xl"
//           />
//         </div>
//         {/* titile section  */}
//         <h2 className="authTitle text-center mb-6">Log in to your account</h2>
//         {/* form section  */}
//         <form onSubmit={handleSignin}>
//           {/* email field  */}
//           <div>
//             <label className="label-control">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="xyz@gmail.com"
//               value={formData.email}
//               onChange={handleChange}
//               className={`mb-6 form-control  ${errors.email ? "border-red-500" : " border-[#E0E0E0] "}`}
//             />
//           </div>
//           {/* password field  */}
//           <div className="relative">
//             <label className="label-control">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//                className={`mb-3 form-control border ${errors.password ? "border-red-500" : " border-[#E0E0E0] "}`}
//             />
//             <span
//               className="absolute right-3 top-10 cursor-pointer text-gray-500"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FiEyeOff /> : <FiEye />}
//             </span>
//           </div>

//           <div className="flex justify-between items-center text-sm text-gray-600">
//             <label className="flex items-center">
//               <input type="checkbox" className="mr-2" />
//               Remember me
//             </label>
//             <Link
//               to="/forgotpassword"
//               className="text-blue-600 hover:underline"
//             >
//               Forgot password?
//             </Link>
//           </div>

//           <button type="submit" className="authButton my-6">
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signin;
