import React, { useState } from "react";
import "./Comment.css";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Button from "../Button/Button";

const Comment = ({ img, className, nameAcc, des, time, countt }) => {
  const [count, setCount] = useState(countt);
  const [disCount, setDisCount] = useState(0);

  // Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setCount(countt + 1);
  };
  return (
    <div className={`comment ${className}`}>
      <img src={img} className="img__small" />
      <div className="comment-des">
        <div className="comment-account">
          {nameAcc}
          <p className="comment-time">{time}</p>
        </div>
        <p className="comment-content">{des}</p>
        <div className="comment-react">
          <AiOutlineLike
            className="button-like"
            onClick={() => incrementCount()}
          />
          {setCount && (
            <p
              style={{
                alignItems: "center",
                display: "flex",
              }}
            >
              {count}
            </p>
          )}
          <AiOutlineDislike
            className="button-like"
            onClick={() => setDisCount(disCount + 1)}
          />
          <p
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            {disCount}
          </p>
          <Button name={"Phản hồi"} className="button-feedback " />
        </div>
      </div>
    </div>
  );
};

export default Comment;
