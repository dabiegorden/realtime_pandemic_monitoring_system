import { FaDisease } from "react-icons/fa";
import { CiMedicalCase } from "react-icons/ci";
import { MdBatchPrediction } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { IoIosStats } from "react-icons/io";

// Logo array
export const Logo = [
  {
    id: 1,
    name: "PMS",
    route: "/",
  },
];

// navbar links
export const navbarLinks = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "About",
    route: "/about",
  },
  {
    id: 3,
    name: "News",
    route: "/news",
  },
  {
    id: 4,
    name: "Dashboard",
    route: "/admin",
  },
  {
    id: 5,
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
