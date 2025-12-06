import { HiHome, HiUser, HiCog } from "react-icons/hi";

export const menuItem = [
    { id: 1, path: "/", label: "Home", icon: <HiHome className="text-xl" /> },
    {
      id: 2,
      path: "/profile",
      label: "Profile",
      icon: <HiUser className="text-xl" />,
    },
    {
      id: 3,
      path: "/settings",
      label: "Settings",
      icon: <HiCog className="text-xl" />,
    },
  ];