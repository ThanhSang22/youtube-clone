import React from "react";
import Card from "../Card/Card";
import { dataCard } from "../Card/dataCard";

const Music = ({ setOpenM }) => {
  const dataFilter = dataCard.filter((data) => data.category === "music");

  return (
    <div className="home-page__card" onClick={() => setOpenM(true)}>
      {dataFilter &&
        dataFilter.map((item, i) => {
          return (
            <Card
            // key={i}
            // link={item.link}
            // imageBig={item.imgBig}
            // imageSmall={item.imgSmall}
            // title={item.title}
            // profile={item.profile}
            // view={item.view}
            />
          );
        })}
    </div>
  );
};

export default Music;
