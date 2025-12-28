import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto py-5">
      <header>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
      <footer>this is footer</footer>
    </div>
  );
};

export default HomeLayout;
