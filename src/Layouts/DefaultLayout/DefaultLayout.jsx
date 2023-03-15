import React from "react";
import "./DefaultLayout.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="home-layout">
      <Header />
      <div className="home-layout__content">
        <Navbar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
