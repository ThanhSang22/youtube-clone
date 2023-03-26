import React, { useState } from "react";
import "./Card.css";
import { GoKebabVertical } from "react-icons/go";
import PopUp from "../PopUp/PopUp";
import { Link } from "react-router-dom";

const Card = ({
  className,
  imageBig,
  imageSmall,
  title,
  profile,
  view,
  link,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`card ${className}`}>
      <Link to={link}>
        <img className="card-img__big" src={imageBig} />
      </Link>
      <div className="card-text">
        {imageSmall && <img className="card-img__small" src={imageSmall} />}
        <div className="card-info">
          <Link to={"/watch"} style={{ textDecoration: "none" }}>
            <h1 className="card-info__title">{title}</h1>
          </Link>
          <p className="card-info__profile">{profile}</p>
          <p className="card-info__view">{view}</p>
        </div>
        <GoKebabVertical
          className="card-kebab"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && <PopUp setIsOpen={setIsOpen} className="card-popup" />}
      </div>
    </div>
  );
};

export default Card;
