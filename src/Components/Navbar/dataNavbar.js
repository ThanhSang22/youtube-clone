import {
  AiFillHome,
  AiOutlineClockCircle,
  AiOutlineLike,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  MdOutlineVideoStable,
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
  MdAccountCircle,
  MdOutlineHelpOutline,
  MdOutlinedFlag,
} from "react-icons/md";
import { RiHistoryLine } from "react-icons/ri";
import { GoReport } from "react-icons/go";
// import profileF8 from "../../assets/images/profileF8.jpg";

export const dataNavbar_item1 = [
  {
    icon: <AiFillHome />,
    name: "Trang chủ",
  },
  {
    icon: <MdOutlineVideoStable />,
    name: "Shorts",
  },
  {
    icon: <MdOutlineSubscriptions />,
    name: "Kênh đăng kí",
  },
];

export const dataNavbar_item2 = [
  {
    icon: <MdOutlineVideoLibrary />,
    name: "Thư viện",
  },
  {
    icon: <RiHistoryLine />,
    name: "Video đã xem",
  },
  {
    icon: <AiOutlineClockCircle />,
    name: "Xem sau",
  },
  {
    icon: <AiOutlineLike />,
    name: "Video đã thích",
  },
];

export const dataNavbar_item3 = [
  {
    icon: <MdAccountCircle />,
    name: "Nodemy",
  },
  {
    icon: <MdAccountCircle />,
    name: "F8 Official",
  },
  {
    icon: <MdAccountCircle />,
    name: "Chang",
  },

  {
    icon: <MdAccountCircle />,
    name: "POPS Anime",
  },
  {
    icon: <MdAccountCircle />,
    name: "Huỳnh",
  },
  {
    icon: <MdAccountCircle />,
    name: "Thị",
  },
  {
    icon: <MdAccountCircle />,
    name: "Thanh",
  },
  {
    icon: <MdAccountCircle />,
    name: "SnG",
  },
];

export const dataNavbar_item4 = [
  {
    icon: <AiOutlineSetting />,
    name: "Cài đặt",
  },
  {
    icon: <MdOutlinedFlag />,
    name: "Nhật ký báo cáo",
  },
  {
    icon: <MdOutlineHelpOutline />,
    name: "Trợ giúp",
  },
  {
    icon: <GoReport />,
    name: "Gửi ý kiến phản hồi",
  },
];
