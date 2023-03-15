import React from "react";
import "./ShortItem.css";

const ShortItem = ({ className, imageBig, title, view }) => {
  return (
    <div className={`short ${className}`}>
      <img className="short-img__big" src={imageBig} />
      <div className="short-text">
        <div className="short-info">
          <h1 className="short-info__title">{title}</h1>
          <p className="short-info__view">{view}</p>
        </div>
      </div>
    </div>
  );
};

export default ShortItem;
