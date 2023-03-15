import React from "react";
import Button from "../Button/Button";
import { dataSidebar } from "./dataSidebar";
import "./Sidebar.css";

const Sidebar = ({ className }) => {
  return (
    <div className={`side-bar ${className}`}>
      {/* <Button name="Tất cả" /> */}
      {dataSidebar &&
        dataSidebar.map((element, e) => {
          return (
            <Button
              icon={element.icon}
              name={element.name}
              key={e}
              className="button-sidebar"
            />
          );
        })}
    </div>
  );
};

export default Sidebar;
