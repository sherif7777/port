import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
   <div className="parent">
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
   </div>
    </>
  );
}
