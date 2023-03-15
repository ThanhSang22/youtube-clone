import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import {
  dataNavbar_item1,
  dataNavbar_item2,
  dataNavbar_item3,
  dataNavbar_item4,
} from "./dataNavbar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item1">
        {dataNavbar_item1 &&
          dataNavbar_item1.map((item, i) => {
            return (
              <Button
                key={i}
                icon={item.icon}
                name={item.name}
                className="btn-navbar__item"
              />
            );
          })}
      </div>
      <hr />
      <div className="navbar-item2">
        {dataNavbar_item2 &&
          dataNavbar_item2.map((item, i) => {
            return (
              <Button
                key={i}
                icon={item.icon}
                name={item.name}
                className={"btn-navbar__item"}
              />
            );
          })}
      </div>
      <hr />
      <div className="navbar-item2">
        <p className="navbar-name">Kênh đăng ký</p>
        {dataNavbar_item3 &&
          dataNavbar_item3.map((item, i) => {
            return (
              <Button
                key={i}
                icon={item.icon}
                name={item.name}
                className={"btn-navbar__item"}
              />
            );
          })}
      </div>
      <hr />
      <div className="navbar-item2">
        {dataNavbar_item4 &&
          dataNavbar_item4.map((item, i) => {
            return (
              <Button
                key={i}
                icon={item.icon}
                name={item.name}
                className={"btn-navbar__item"}
              />
            );
          })}
      </div>
      <hr />
      <div className="navbar-footer">
        <p className="navbar-footer__name">Giới thiệu Báo chí Bản quyền</p>
        <p className="navbar-footer__name">Liên hệ với chúng tôi</p>
        <p className="navbar-footer__name">Người sáng tạo Quảng cáo</p>
        <p className="navbar-footer__name">Nhà phát triển</p>
        <p className="navbar-footer__name">Điều khoản Quyền riêng tư</p>
        <p className="navbar-footer__name">Chính sách và an toàn</p>
        <p className="navbar-footer__name">Cách YouTube hoạt động </p>
        <p className="navbar-footer__name">Thử các tính năng mới</p>
        <p className="navbar-footer__name">© 2023 Google LLC</p>
      </div>
    </div>
  );
};

export default Navbar;
