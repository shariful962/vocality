import React from "react";
import { HiMenu } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";

 const Header = ({ collapsed, setCollapsed, setMobileOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 h-16 bg-white   flex items-center justify-between px-4 z-50 transition-all duration-300 
        ${collapsed ? "md:ml-20" : "md:ml-74"} 
        ${collapsed ? "md:w-[calc(100%-5rem)]" : "md:w-[calc(100%-296px)]"} 
        ml-0 w-full`} // For desktop, no margin-left
        style={{borderBottom: '1px solid rgba(0,0,0, 0.10)'}}
    >
      {/* Menu Button */}
      <button
        className="text-2xl md:hidden"
        onClick={() => setMobileOpen(true)}
      >
        <HiMenu />
      </button>

      <button
        className="text-2xl cursor-pointer hidden md:block"
        onClick={() => setCollapsed(!collapsed)}
      >
        <HiMenu />
      </button>

      {/* Notification Icon */}
      <IoNotificationsOutline className="text-2xl" />
    </div>
  );
};
export default Header;