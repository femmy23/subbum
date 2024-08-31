import React from "react";
import { FaBell, FaUser } from "react-icons/fa";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const HeaderComp = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 2rem;
`;
const Span = styled.span`
  font-size: 1rem;
  font-weight: 600;
  /* margin-right: 0.5rem; */
  color: #4169e1;
`;
const H3 = styled.h3`
  display: flex;
  align-items: center;
  color: #2b3b5a;
  font-size: 1rem;
`;
const P = styled.p`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  color: #4169e1;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default function Header({ children }) {
  return (
    <HeaderComp>
      <H3>{children || "Welcome Lawal, Wahab"}</H3>
      <Flex>
        <P>Upgrade to Merchant</P>
        <Span>
          <Link style={{ textDecoration: "none", color: "#4169e1" }}>
            <FaBell
              style={{
                width: ".75rem",
                height: ".75rem",
                padding: ".25rem",
                backgroundColor: "##F7F9FD",
                borderRadius: "100%",
                border: "3px solid #D7E1F4",
              }}
            />
          </Link>
        </Span>
        <Span>
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "#4169e1" }}
          >
            <FaUser
              style={{
                width: ".75rem",
                height: ".75rem",
                padding: ".25rem",
                backgroundColor: "##F7F9FD",
                borderRadius: "100%",
                border: "3px solid #D7E1F4",
              }}
            />
          </Link>
        </Span>
      </Flex>
    </HeaderComp>
  );
}
