import React from "react";
import { NavLink } from "react-router-dom";

import { FiClipboard, FiHeadphones, FiLogOut } from "react-icons/fi";
import { BiBoltCircle, BiChevronDown, BiSolidDashboard } from "react-icons/bi";
import { styled } from "styled-components";
import { FaPhone, FaRecycle, FaTv, FaWifi } from "react-icons/fa";

const Sidenav = styled.div`
  width: 17%;
  background-color: #eff3fb;
  padding: 0 2rem;
`;
const Logout = styled.div`
  margin: 4rem 0 3rem 0;
  list-style: none;
`;
const Ul = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;
// const A = styled.a`

// `;
const Logo = styled.div`
  margin: 1rem;
`;
const LogoImg = styled.img`
  width: 10rem;
`;

export default function SideNav() {
  const activeStyles = ({ isActive }) => {
    return {
      // fontSize: "1rem",
      // display: "flex",
      // gap: "1rem",
      // color: "#4c689e",
      // padding: "0.5rem 1rem",
      // borderRadius: "0.5rem",
      // textDecoration: "none",
      // margin: "0.4rem 0",
      color: !isActive ? "" : "#fff",
      backgroundColor: !isActive ? "" : "#4169e1",
    };
  };

  return (
    <Sidenav>
      <Logo>
        <LogoImg src="./logo.png" alt="" />
      </Logo>
      <Ul>
        <NavLink className="navlink" to="/dashboard" style={activeStyles}>
          <BiSolidDashboard /> Dashboard
        </NavLink>
        <NavLink className="navlink">
          <FaPhone /> Buy Airtime <BiChevronDown />
        </NavLink>

        <NavLink className="navlink">
          <FaWifi /> Buy Data <BiChevronDown />
        </NavLink>

        <NavLink className="navlink">
          <FaTv /> TV Subscription <BiChevronDown />
        </NavLink>

        <NavLink className="navlink">
          <BiBoltCircle /> Pay Electricity Bill <BiChevronDown />
        </NavLink>

        <NavLink className="navlink" to="/airtimeToCash" style={activeStyles}>
          <FaRecycle /> Airtime To Cash
        </NavLink>

        <NavLink
          className="navlink"
          to="/TransactionHistory"
          style={activeStyles}
        >
          <FiClipboard /> Transaction History
        </NavLink>

        <NavLink className="navlink" to="/support" style={activeStyles}>
          <FiHeadphones /> Help & Support
        </NavLink>
      </Ul>

      <Logout>
        <NavLink
          className="navlink"
          to="/login"
          style={{ textDecoration: "none" }}
        >
          <FiLogOut />
          Log Out <BiChevronDown />
        </NavLink>
      </Logout>
    </Sidenav>
  );
}
