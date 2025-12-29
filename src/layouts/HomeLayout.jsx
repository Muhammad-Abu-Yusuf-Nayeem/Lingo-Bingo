import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto py-5">
      <header className="bg-cyan-300">
        <Navbar></Navbar>
      </header>
      <main className="h-125 bg-blue-400">
        <Outlet></Outlet>
      </main>
      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
