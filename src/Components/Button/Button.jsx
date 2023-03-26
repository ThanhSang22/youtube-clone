import React from "react";
import "./Button.css";

const Button = ({ icon, name, className, onClick }) => {
  return (
    <button className={`button-component ${className}`} onClick={onClick}>
      {icon && <span className="button-icon">{icon}</span>}
      {name && <div className="button-name">{name}</div>}
    </button>
  );
};

export default Button;
