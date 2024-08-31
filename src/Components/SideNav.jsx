import React from "react";
import { Link } from "react-router-dom";

import {
  FiArrowUp,
  FiClipboard,
  FiHeadphones,
  FiLogOut,
  FiNavigation,
} from "react-icons/fi";
import { BiBoltCircle, BiChevronDown, BiSolidDashboard } from "react-icons/bi";
import { styled } from "styled-components";
import Button from "./Button";
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
const A = styled.a`
  font-size: 1rem;
  display: flex;
  /* justify-content: space-around; */
  gap: 1rem;
  color: #4c689e;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin: 0.4rem 0;
  &:hover {
    background-color: #4169e1;
    color: #fff;
  }
`;
const Logo = styled.div`
  margin: 1rem;
`;
const LogoImg = styled.img`
  width: 10rem;
`;

export default function SideNav() {
  return (
    <Sidenav>
      <Logo>
        <LogoImg src="./logo.png" alt="" />
      </Logo>
      <Ul>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <A>
            <BiSolidDashboard /> Dashboard
          </A>
        </Link>
        <Link style={{ textDecoration: "none" }}>
          <A>
            <FaPhone /> Buy Airtime <BiChevronDown />
          </A>
        </Link>

        <Link style={{ textDecoration: "none" }}>
          <A>
            <FaWifi /> Buy Data <BiChevronDown />
          </A>
        </Link>

        <Link style={{ textDecoration: "none" }}>
          <A>
            <FaTv /> TV Subscription <BiChevronDown />
          </A>
        </Link>

        <Link style={{ textDecoration: "none" }}>
          <A>
            <BiBoltCircle /> Pay Electricity Bill <BiChevronDown />
          </A>
        </Link>

        <Link to="/airtimeToCash" style={{ textDecoration: "none" }}>
          <A>
            <FaRecycle /> Airtime To Cash
          </A>
        </Link>

        <Link to="/TransactionHistory" style={{ textDecoration: "none" }}>
          <A>
            <FiClipboard /> Transaction History
          </A>
        </Link>

        <Link to="/support" style={{ textDecoration: "none" }}>
          <A>
            <FiHeadphones /> Help & Support
          </A>
        </Link>
      </Ul>

      <Logout>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <A>
            <FiLogOut />
            Log Out <BiChevronDown />
          </A>
        </Link>
      </Logout>
    </Sidenav>
  );
}
