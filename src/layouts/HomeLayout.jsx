import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import DefaultHomeComponent from "../components/DefaultHomeComponent";
import { AuthContext } from "../provider/AuthProvider";
import About from "../pages/About";
import Slider from "../components/homeComponents/Slider";
import SuccessSection from "../components/homeComponents/SuccessSection";
import WhyLearnSection from "../components/homeComponents/WhyLearnSection";
import StartLearningSection from "../components/homeComponents/StartLearningSection";

const HomeLayout = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="w-11/12 mx-auto py-5">
      <header className="relative py-2 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
        <Navbar></Navbar>
      </header>
      <main className="">
        {user?.email && <DefaultHomeComponent></DefaultHomeComponent>}
        <Slider></Slider>
        <About></About>
        <SuccessSection></SuccessSection>
        <WhyLearnSection></WhyLearnSection>
        <StartLearningSection></StartLearningSection>
        <Outlet></Outlet>
      </main>
      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
