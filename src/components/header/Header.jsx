import React, { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import NotificationDropdown from "./NotificationDropdown";


 const Header = ({ collapsed, setCollapsed, setMobileOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

     <div className="flex gap-x-4 relative" ref={dropdownRef}>
          {/* Notification Icon */}
          <div
            onClick={() => setOpenDropdown(!openDropdown)}
            className="w-10 h-10 rounded-full border border-Secondary flex items-center justify-center cursor-pointer"
          >
            <IoNotificationsOutline size={24} className="text-dark1" />
          </div>

          {/* User Icon */}
          {/* <div  className="w-10 h-10 rounded-full border border-Secondary flex items-center justify-center cursor-pointer">
            <CiUser size={28} className="text-Secondary" />
          </div> */}

          {/* Dropdown */}
          {openDropdown && <NotificationDropdown />}
        </div>
    </div>
  );
};
export default Header;