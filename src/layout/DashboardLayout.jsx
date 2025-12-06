import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main content area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          collapsed ? "md:ml-20" : "md:ml-64"
        } ml-0` } // Margin-left depends on collapse state
      >
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          setMobileOpen={setMobileOpen}
        />

        <div className="p-4 overflow-auto mt-16">
          {/* Content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

