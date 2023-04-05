import React, { useState } from "react";
import Button from "../Button/Button";
import Music from "../Music/Music";
import { dataSidebar } from "./dataSidebar";
import { dataCard } from "../Card/dataCard";
import "./Sidebar.css";

const Sidebar = ({ className, setFilterCard, filterCard }) => {
  // const [open, setOpen] = useState(false);

  return (
    <div className={`side-bar ${className}`}>
      <Button
        name={"Tất cả"}
        onClick={() => setFilterCard(dataCard)}
        className={dataCard ? "button-sidebar" : "sidebar-bgr"}
      />
      {dataSidebar &&
        dataSidebar.map((element, e) => {
          return (
            <Button
              icon={element.icon}
              name={element.name}
              key={e}
              className={filterCard ? "button-sidebar" : "sidebar-bgr"}
              onClick={() => filterCard(element)}
            />
          );
        })}
      {/* {open && <Music setOpenM={setOpen} />} */}
    </div>
  );
};

export default Sidebar;
