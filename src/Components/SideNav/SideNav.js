import React from "react";
import { Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaUsers, FaHandsHelping } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { HiChatAlt2, HiDocumentDuplicate } from "react-icons/hi";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="side-bar">
      <h1>HBoard</h1>
      <ul className="side-menu">
        <li>
          <Link to="dashboard">
            <span>
              <MdDashboardCustomize />
            </span>{" "}
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="dashboard">
            <span>
              <RiMoneyDollarBoxFill />
            </span>
            Finances
          </Link>
        </li>
        <li>
          <Link to="dashboard">
            <span>
              <FaUsers />
            </span>
            People
          </Link>
        </li>
        <li>
          <Link to="dashboard">
            <span>
              <GiNetworkBars />
            </span>
            Statices
          </Link>
        </li>
        <li>
          <Link to="dashboard">
            <span>
              <HiDocumentDuplicate />
            </span>
            Documents
          </Link>
        </li>
        <span className="other">Others</span>
        <li>
          <Link to="dashboard">
            <span>
              <HiChatAlt2 />
            </span>
            Chat <small>3</small>
          </Link>
        </li>
        <li>
          <Link to="dashboard">
            <span>
              <FaHandsHelping />
            </span>
            Support
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
