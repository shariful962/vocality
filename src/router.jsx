import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import AuthLayout from "./layout/AuthLayout";
import Signin from "./pages/auth/Signin";
import ForgotPassword from "./pages/auth/ForgotPassword";
import OTP from "./pages/auth/OTP";
import UpdatePassword from "./pages/auth/UpdatePassword";
import Error from "./pages/Error";
import Earnings from "./pages/earnings/Earnings";
import Users from "./pages/users/Users";
import PersonalityManagement from "./pages/personality management/PersonalityManagement";
import TimeManagement from "./pages/time management/TimeManagement";
import PlanManagement from "./pages/plan management/PlanManagement";
import AiConfiguration from "./pages/Ai configuration/AiConfiguration";
import Settings from "./pages/settings/Settings";
import Overview from "./pages/overview/Overview";
import Profile from "./pages/profile/Profile";
import ChangePass from "./pages/change password/ChangePass";
import EditPlan from "./pages/plan management/EditPlan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Signin /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
      { path: "otp", element: <OTP /> },
      { path: "resetpassword", element: <UpdatePassword /> },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Overview /> },
      { path: "earning", element: <Earnings /> },
      { path: "users", element: <Users /> },
      { path: "personality", element: <PersonalityManagement /> },
      { path: "time", element: <TimeManagement /> },
      { path: "plan", element: <PlanManagement /> },
      { path: "edit-plan/:id", element: <EditPlan /> },
      // {
      //   path: "plan",
      //   element: <PlanManagement />,
      //   children: [
      //     { path: ":id/edit", element: <EditPlan /> }, // nested now
      //   ],
      // },
      { path: "configuration", element: <AiConfiguration /> },
      { path: "settings", element: <Settings /> },
      { path: "settings/profile", element: <Profile /> },
      { path: "settings/changepassword", element: <ChangePass /> },
    ],
  },
]);

export default router;
