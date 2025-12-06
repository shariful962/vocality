import React from "react";
import { NavLink } from "react-router-dom";
import { menuItem } from "../ui/MenuItem";

const Sidebar = ({ collapsed, mobileOpen, setMobileOpen }) => {
  
  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      <div
        className={`
          fixed  left-0 h-full bg-white shadow-lg
          transition-all duration-300 z-60
          ${collapsed ? "md:w-20" : "md:w-64"}
          ${
            mobileOpen
              ? "translate-x-0 w-64"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        <ul className="mt-5 space-y-2">
          {menuItem.map((item) => (
            <li key={item.id} className={`px-2.5  ${collapsed ? "flex items-center justify-center" : ""}`}>
              <NavLink
                to={item.path}
                className={({isActive}) => `flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100 ${isActive ? "bg-gray-200 text-blue-500" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}

       
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
