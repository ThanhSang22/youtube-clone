import React, { useState } from "react";
import "./Card.css";
import { GoKebabVertical } from "react-icons/go";
import PopUp from "../PopUp/PopUp";

const Card = ({ className, imageBig, imageSmall, title, profile, view }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`card ${className}`}>
      <img className="card-img__big" src={imageBig} />
      <div className="card-text">
        {imageSmall && <img className="card-img__small" src={imageSmall} />}
        <div className="card-info">
          <h1 className="card-info__title">{title}</h1>
          <p className="card-info__profile">{profile}</p>
          <p className="card-info__view">{view}</p>
        </div>
        <GoKebabVertical
          className="card-kebab"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && <PopUp setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default Card;
