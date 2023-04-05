import React, { useState } from "react";
import "./HomePage.css";
import Card from "../../Components/Card/Card";
import { dataCard, dataShort } from "../../Components/Card/dataCard";
import DefaultLayout from "../../Layouts/DefaultLayout/DefaultLayout";
import ytb_short from "../../assets/images/youtube-shorts-icon.png";
import { AiOutlineClose } from "react-icons/ai";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ShortItem from "../../Components/ShortItem/ShortItem";
import { dataSidebar } from "../../Components/Sidebar/dataSidebar";
import Button from "../../Components/Button/Button";

const HomePage = () => {
  const [filterCard, setFilterCard] = useState(dataCard);

  const handleCard = (name) => {
    const filterCardItem = filterCard.filter((data) => data.category === name);

    setFilterCard(filterCardItem);
  };

  return (
    <DefaultLayout>
      <Sidebar
        className="home-page__sidebar"
        setFilterCard={setFilterCard}
        filterCard={handleCard}
      />
      <div className="home-page__video">
        <div className="home-page__card">
          {/* {dataFilter &&
            dataFilter.map((item, i) => {
              return (
                <Card
                  key={i}
                  link={item.link}
                  imageBig={item.imgBig}
                  imageSmall={item.imgSmall}
                  title={item.title}
                  profile={item.profile}
                  view={item.view}
                />
              );
            })} */}
          {filterCard &&
            filterCard.map((item, i) => {
              return (
                <Card
                  key={i}
                  link={item.link}
                  imageBig={item.imgBig}
                  imageSmall={item.imgSmall}
                  title={item.title}
                  profile={item.profile}
                  view={item.view}
                />
              );
            })}
        </div>
        <hr className="home-page__hr" />
        <div className="home-page__name">
          <div className="home-page__first">
            <img src={ytb_short} className="home-page__logo" />
            short
          </div>
          <AiOutlineClose className="header-icon" />
        </div>
        <div className="home-page__short">
          {dataShort &&
            dataShort.map((item, i) => {
              return (
                <ShortItem
                  className
                  key={i}
                  imageBig={item.imgBig}
                  title={item.title}
                  view={item.view}
                />
              );
            })}
        </div>
        <hr className="home-page__hr" />
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
