import React from "react";
import Card from "../Card/Card";
import { dataCard } from "../Card/dataCard";

const Music = ({ setOpenM }) => {
  return (
    <div className="home-page__card" onClick={() => setOpenM(true)}>
      {dataCard &&
        dataCard.map((item, i) => {
          return (
            <Card
              key={i}
              imageBig={item.imgBig}
              imageSmall={item.imgSmall}
              title={item.title}
              profile={item.profile}
              view={item.view}
            />
          );
        })}
    </div>
  );
};

export default Music;
