// import React from "react";
// import { NavLink } from "react-router-dom";
// import { menuItem } from "../ui/MenuItem";
// import { RxCross1 } from "react-icons/rx";

// const Sidebar = ({ collapsed, mobileOpen, setMobileOpen }) => {
//   return (
//     <>
//       {/* Mobile Overlay */}
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setMobileOpen(false)}
//         ></div>
//       )}

//       <div
//         className={`
//           fixed  left-0 h-full bg-white md:border-r-[.5px] md:border-black/10
//           transition-all duration-300 z-60
//           ${collapsed ? "md:w-20" : "md:w-74"}
//           ${
//             mobileOpen
//               ? "translate-x-0 w-74"
//               : "-translate-x-full md:translate-x-0"
//           }
//         `}
//       >
//         {/* mobile device cross button  */}
//         <div
//           onClick={() => setMobileOpen(false)}
//           className=" md:hidden flex items-center justify-center bg-Primary h-8 w-8 rounded-full cursor-pointer text-white absolute top-2 right-3"
//         >
//           <span>
//             <RxCross1 />
//           </span>
//         </div>
//         <div
//           className={`flex items-center justify-start py-6 ${
//             collapsed ? "px-2" : "px-4"
//           }`}
//         >
//           <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200">
//             <img
//               src="https://i.pravatar.cc/150?img=12"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* menu items  */}
//         <ul className="mt-5 space-y-2">
//           {menuItem.map((item) => (
//             <li
//               key={item.id}
//               className={`px-2.5  ${
//                 collapsed ? "flex items-center justify-center" : ""
//               }`}
//             >
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 ${
//                     isActive ? "bg-dark1/5" : ""
//                   }`
//                 }
//                 onClick={() => setMobileOpen(false)}
//               >
//                 {/* {item.icon} */} <img src={item.img} alt="" className="h-6 w-6" />
//                 {!collapsed && <span>{item.label}</span>}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Sidebar;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuItem } from "../ui/MenuItem";
import { RxCross1 } from "react-icons/rx";
import { IoChevronForwardOutline, IoChevronDownOutline } from "react-icons/io5";

const Sidebar = ({ collapsed, mobileOpen, setMobileOpen }) => {
  const [openSettings, setOpenSettings] = useState(false);

  const toggleSettings = () => {
    setOpenSettings((prev) => !prev);
  };

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
          fixed left-0 h-full bg-white md:border-r-[.5px] md:border-black/10
          transition-all duration-300 z-60
          ${collapsed ? "md:w-20" : "md:w-74"}
          ${
            mobileOpen
              ? "translate-x-0 w-74"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* Mobile close button */}
        <div
          onClick={() => setMobileOpen(false)}
          className="md:hidden flex items-center justify-center bg-Primary h-8 w-8 rounded-full cursor-pointer text-white absolute top-2 right-3"
        >
          <RxCross1 />
        </div>

        {/* Profile */}
        <div
          className={`flex items-center justify-start py-6 ${
            collapsed ? "px-2" : "px-4"
          }`}
        >
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Menu */}
        <ul className="mt-5 space-y-2">
          {menuItem.map((item) => (
            <li
              key={item.id}
              className={`px-2.5 ${
                collapsed ? "flex items-center justify-center" : ""
              }`}
            >
              {/* SETTINGS WITH SUBMENU */}
              {item.subSetting ? (
                <div>
                  <button
                    type="button"
                    onClick={toggleSettings}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={item.img} alt="" className="h-6 w-6" />
                      {!collapsed && <span>{item.label}</span>}
                    </div>

                    {!collapsed && (
                      <span className="text-gray-500">
                        {openSettings ? (
                          <IoChevronDownOutline size={18} />
                        ) : (
                          <IoChevronForwardOutline size={18} />
                        )}
                      </span>
                    )}
                  </button>

                  {/* Submenu */}
                  {openSettings && !collapsed && (
                    <ul className="ml-10 mt-1 space-y-1">
                      {item.subSetting.map((sub) => (
                        <li key={sub.id}>
                          <NavLink
                            to={item.path + sub.path}
                            className={({ isActive }) =>
                              `block px-3 py-2 rounded-md text-sm hover:bg-gray-100 ${
                                isActive ? "bg-dark1/5 font-medium" : ""
                              }`
                            }
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                /* NORMAL MENU ITEM */
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 ${
                      isActive ? "bg-dark1/5" : ""
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  <img src={item.img} alt="" className="h-6 w-6" />
                  {!collapsed && <span>{item.label}</span>}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

