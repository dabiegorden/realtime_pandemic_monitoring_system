import { FaDisease } from "react-icons/fa";
import { CiMedicalCase } from "react-icons/ci";
import { MdBatchPrediction } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { IoIosStats } from "react-icons/io";

// Logo array
export const Logo = [
  {
    name: "PMS",
    route: "/",
  },
];

// navbar links
export const navbarLinks = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "News",
    route: "/news",
  },
  {
    name: "Dashboard",
    route: "/admin",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

export const sidebarLinks = [
  {
    id: 1,
    icon: <MdDashboard />,
    name: "Dashboard",
    route: "/admin",
  },
  {
    id: 2,
    icon: <FaDisease />,
    name: "Pandemics",
    route: "/admin/pandemics",
  },
  {
    id: 3,
    icon: <CiMedicalCase />,
    name: "Cases",
    route: "/admin/cases",
  },
  {
    id: 4,
    icon: <MdBatchPrediction />,
    name: "Predictions",
    route: "/admin/predictions",
  },
  // {
  //   id: 5,
  //   icon: <IoIosStats />,
  //   name: "Statistics",
  //   route: "/admin/statistics",
  // },
  {
    id: 6,
    icon: <CiSettings />,
    name: "Settings",
    route: "/admin/settings",
  },
];
