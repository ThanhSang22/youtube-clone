import React from "react";
import Header from "../../Components/Header/Header";
import SittingPage from "../../Pages/SittingPage/SittingPage";

const SittingLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <SittingPage />
      {children}
    </div>
  );
};

export default SittingLayout;
