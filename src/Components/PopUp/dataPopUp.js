import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { RiMenuAddLine, RiForbid2Line } from "react-icons/ri";
import { TbShare3 } from "react-icons/tb";
import { MdOutlineOutlinedFlag, MdNotInterested } from "react-icons/md";

export const dataPopUp = [
  {
    icon: <AiOutlineMenuUnfold />,
    name: "Thêm vào danh sách chờ",
  },
  {
    icon: <BiTimeFive />,
    name: "Lưu vào danh sách xem sau",
  },
  {
    icon: <RiMenuAddLine />,
    name: "Lưu vào danh sách phát",
  },
  {
    icon: <TbShare3 />,
    name: "Chia sẻ",
  },
];

export const dataPopUp2 = [
  {
    icon: <MdNotInterested />,
    name: "Không quan tâm",
  },
  {
    icon: <BiTimeFive />,
    name: "Không đề xuất kênh này",
  },
  {
    icon: <MdOutlineOutlinedFlag />,
    name: "Báo vi phạm",
  },
];
