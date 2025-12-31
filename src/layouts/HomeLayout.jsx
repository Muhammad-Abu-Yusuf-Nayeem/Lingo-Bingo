import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import DefaultHomeComponent from "../components/DefaultHomeComponent";
import { AuthContext } from "../provider/AuthProvider";

const HomeLayout = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="w-11/12 mx-auto py-5">
      <header className="">
        <Navbar></Navbar>
      </header>
      <main className="h-125 bg-blue-400">
        {user?.email && <DefaultHomeComponent></DefaultHomeComponent>}
        <Outlet></Outlet>
      </main>
      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
