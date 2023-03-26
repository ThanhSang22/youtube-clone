import React, { useState } from "react";
import Button from "../Button/Button";
import Music from "../Music/Music";
import { dataSidebar } from "./dataSidebar";
import "./Sidebar.css";

const Sidebar = ({ className, onClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`side-bar ${className}`}>
      {/* <Button name="Tất cả" onClick={() => setOpen(true)} /> */}
      {dataSidebar &&
        dataSidebar.map((element, e) => {
          return (
            <Button
              icon={element.icon}
              name={element.name}
              key={e}
              className="button-sidebar"
              onClick={onClick}
            />
          );
        })}
      {open && <Music setOpenM={setOpen} />}
    </div>
  );
};

export default Sidebar;
