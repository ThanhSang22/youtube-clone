import React from "react";
import "./PopUp.css";
import Button from "../Button/Button";
import { dataPopUp, dataPopUp2 } from "./dataPopUp";
import styles from "../../App.css";

const PopUp = ({ setIsOpen }) => {
  return (
    <div onClick={() => setIsOpen(false)} className="pop-up">
      <div className="pop-up-body" onClick={(e) => e.stopPropagation()}>
        <div className="pop-up__item1">
          {dataPopUp &&
            dataPopUp.map((element, e) => {
              return (
                <Button
                  key={e}
                  icon={element.icon}
                  name={element.name}
                  className={"btn--pop-up"}
                />
              );
            })}
        </div>
        <hr />
        <div className="pop-up__item2">
          {dataPopUp2 &&
            dataPopUp2.map((element, e) => {
              return (
                <Button
                  key={e}
                  icon={element.icon}
                  name={element.name}
                  className={"btn--pop-up"}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
