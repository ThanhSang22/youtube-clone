import React from "react";
import "./Button.css";

const Button = ({ icon, name, className }) => {
  return (
    <button className={`button-component ${className}`}>
      {icon && <span className="button-icon">{icon}</span>}
      <div className="button-name">{name}</div>
    </button>
  );
};

export default Button;
