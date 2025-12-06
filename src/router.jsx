import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AuthLayout from "./layout/AuthLayout";
import Signin from "./pages/auth/Signin";
import ForgotPassword from "./pages/auth/ForgotPassword";
import OTP from "./pages/auth/OTP";
import UpdatePassword from "./pages/auth/UpdatePassword";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout/>,
    errorElement: <Error/>,
    children: [
      { index: true, element: <Signin /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
      { path: "otp", element: <OTP /> },
      { path: "resetpassword", element: <UpdatePassword/>}
    ],
  },
  {
    element: <DashboardLayout/>,
    children: [
      {path: "dashboard", element: <Home/> },
      {path: "profile", element: <Profile/> },
      {path: "settings", element: <Settings/> }
    ]
  }
 
]);

export default router;
