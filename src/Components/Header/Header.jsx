import React, { useState } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import { AiOutlineMenu, AiOutlineSearch, BsKeyboard } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import logoYtb from "../../assets/images/logo-ytb-white.png";
import accout from "../../assets/images/accout.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <div className="header">
      {/* <Button icon={<AiOutlineMenu />} /> */}
      <div className="header-item1">
        <AiOutlineMenu
          className="header-icon "
          onClick={() => setOpenNavbar(!openNavbar)}
        />
        <Link to={"/"} style={{ alignItems: "center", display: "flex" }}>
          <img src={logoYtb} className="header-logo" />
        </Link>
      </div>
      <div className="header-item2">
        <input className="header-search" placeholder="Tìm kiếm" />
        <AiOutlineSearch className="header-icon__search" />
        <BsFillMicFill className="header-icon backgroud-icon" />
      </div>

      <div className="header-item3">
        <MdOutlineVideoCall className="header-icon " />
        <IoIosNotificationsOutline className="header-icon " />
        <img src={accout} className="header-accout" />
      </div>
      {openNavbar && (
        <Navbar
          className={openNavbar ? "header-navbar" : "openNavbar__slide"}
          setOpenNavbar={setOpenNavbar}
        />
      )}
    </div>
  );
};

export default Header;
