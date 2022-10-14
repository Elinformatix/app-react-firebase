import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbarsk.js";
import Sidebar from "../components/Sidebar/Sidebarsk.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";

// views

import Dashboard from "../views/admin/Dashboardsk.js";
import Settings from "../views/admin/Settings";
import Clients from "../views/admin/Clients.js";




export default function Admin() {

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24 ">
          <Routes>
            <Route path="dashboard"  element={<Dashboard/>} />
            <Route path="user"  element={<Settings/>} />
            <Route path="clientes"  element={<Clients/>} />
            <Route path="*"  element={<Dashboard/>} />
            
            
          </Routes>
          {/*<Navigate from="/" to="/skadmin" />*/}
         
       
          
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}