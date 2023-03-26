import React from "react";
import "./WatchPage.css";
import Button from "../../Components/Button/Button";
import Watch from "../../Components/Watch/Watch";
import SittingLayout from "../../Layouts/SittingLayout/SittingLayout";
import { listOptionWatch, listVideoPage } from "./dataWatchPage";
import Video from "../../Components/Video/Video";

const WatchPage = () => {
  return (
    <SittingLayout>
      <div className="watch-page" style={{ backgroundColor: "black" }}>
        <Watch className={"watch"} />
        <div className="watch-page__list">
          <div className="watch-page__list-options">
            {listOptionWatch &&
              listOptionWatch.map((listOption, list) => {
                return (
                  <Button
                    key={list}
                    icon={listOption.icon}
                    name={listOption.name}
                    className="listOptionWatch"
                  />
                );
              })}
          </div>
          <div className="watch-page__list-video">
            {listVideoPage &&
              listVideoPage.map((card, i) => {
                return (
                  <Video
                    key={i}
                    link={card.linkk}
                    imageBig={card.imgBigg}
                    imageSmall={card.imgSmalll}
                    title={card.titlee}
                    profile={card.profilee}
                    view={card.vieww}
                    className={"listCard"}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </SittingLayout>
  );
};

export default WatchPage;
