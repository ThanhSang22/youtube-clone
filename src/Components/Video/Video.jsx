import React, { useState } from "react";
import "./Video.css";
import { GoKebabVertical } from "react-icons/go";
import PopUp from "../PopUp/PopUp";
import { Link } from "react-router-dom";

const Video = ({ className, imageBig, title, profile, view, link }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`card ${className}`}>
      {link && (
        <Link to={link}>
          <img className="video-img__big" src={imageBig} />
        </Link>
      )}
      <div className="card-text">
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
        {isOpen && <PopUp setIsOpen={setIsOpen} className={"video-popup"} />}
      </div>
    </div>
  );
};

export default Video;
