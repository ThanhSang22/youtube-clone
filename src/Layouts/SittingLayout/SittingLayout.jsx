import React from "react";
import Header from "../../Components/Header/Header";

const SittingLayout = ({ children }) => {
  return (
    <div className="layout" style={{ flexDirection: "column" }}>
      <Header />
      {children}
    </div>
  );
};

export default SittingLayout;
