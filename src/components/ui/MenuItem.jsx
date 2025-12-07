import { HiHome, HiUser, HiCog } from "react-icons/hi";
import Icons from "../../assets/image";

export const menuItem = [
  {
    id: 1,
    path: "/dashboard",
    label: "Overview",
    icon: <HiHome size={16} />,
    img: Icons.overview,
  },
  {
    id: 2,
    path: "/earning",
    label: "Earning",
    icon: <HiUser className="text-xl" />,
    img: Icons.earning,
  },
  {
    id: 3,
    path: "/users",
    label: "Users",
    icon: <HiCog className="text-xl" />,
    img: Icons.user,
  },
  {
    id: 4,
    path: "/personality",
    label: "Personality Management",
    img: Icons.personal,
  },
  {
    id: 5,
    path: "/time",
    label: "Time Managment ",
    img: Icons.time,
  },
  {
    id: 6,
    path: "/plan",
    label: "Plan Management",
    img: Icons.plan,
  },
  {
    id: 7,
    path: "/configuration",
    label: "AI Configuration",
    img: Icons.AIC,
  },
  {
    id: 8,
    path: "/settings",
    label: "Settings",
    img: Icons.settings,
    subSetting: [
      {
        id: 1,
        path: "/profile",
        label: "Profile",
      },
      {
        id: 2,
        path: "/changepassword",
        label: "Change Password",
      },
    ],
  },
];
