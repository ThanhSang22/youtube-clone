import React from "react";
import "./Watch.css";
import watch from "../../assets/images/watch.jpg";
import accout from "../../assets/images/it-girl.jpg";
import Button from "../Button/Button";
import { RiShareForwardLine } from "react-icons/ri";
import { BiCut, BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineSort } from "react-icons/md";
import Comment from "../Comment/Comment";
import { dataComment } from "../Comment/dataComment";

const Watch = ({ name, className }) => {
  return (
    <div className={`watch-component p-20 ${className}`}>
      <img src={watch} className="img__big" />
      <p className="watch-name">
        {name}
        #1 Lagu Inggris Santai Terpopuler Dan Terbaru [Dengan Lirik Lagu] - Lagu
        Barat Akustik Terbaik 2021
      </p>
      <div className="watch-deps">
        <div className="watch-deps__item1">
          <img src={accout} className="img__small" alt="" />
          <div className="watch-info">
            <p className="watch-accout">DeLirik</p>
            <p className="watch-follow">5,44 Tr người đăng ký </p>
          </div>
          <Button name={"Đăng ký"} className={"button-watch"} />
        </div>
        <div className="watch-deps__item1">
          <Button
            icon={<RiShareForwardLine />}
            name={"Chia sẻ"}
            className={"buttonWatch"}
          />
          <Button
            icon={<BiCut />}
            name={"Tạo đoạn video"}
            className={"buttonWatch"}
          />
          <BiDotsHorizontalRounded className={"button-dot"} />
        </div>
      </div>
      <p className="watch-description">
        928.016 lượt xem 28 thg 2, 2022
        <br />
        Kumpulan lagu bahasa inggris terbaik, terbaru, viral, dan terpopuler
        2021 di TikTok, Spotify, Resso, YouTube. Kumpulan lagu pop barat sedih,
        galau, santai, bahagia, cinta cinta, yang enak di dengar dan cocok untuk
        menghibur dan menemani saat bekerja, beraktivitas, maupun berisirahat
        dan tidur. Lagu Barat Populer & TikTok Viral 2022 (Dengan Lirik) ~ Lagu
        Pop Inggris Terbaru, Santai, Semangat. # DeVideo
        <br />
        ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
      </p>
      <div className="watch-comment">
        <div className="first-comment">
          <p className="comment-total">247 bình luận</p>
          <Button
            icon={<MdOutlineSort />}
            name={"Sắp xếp theo"}
            className="watch-short"
          />
        </div>
        {dataComment &&
          dataComment.map((cmt, a) => (
            <Comment
              key={a}
              img={cmt.imgg}
              nameAcc={cmt.nameAcc}
              time={cmt.time}
              countt={cmt.countt}
              des={cmt.des}
            />
          ))}
      </div>
    </div>
  );
};

export default Watch;
