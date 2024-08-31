import React from "react";
import { FaFilter } from "react-icons/fa";
import { css, styled } from "styled-components";
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";
import { HistoryData } from "../data/history-data";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = styled.div`
  width: 80%;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 14px;
  color: #6882b6;
  font-weight: 600;
  width: 13%;
`;

const ListComp = styled.div`
  margin: 0 0.6rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid #d7e1f4;
  padding: 0.5rem 0 0.2rem 0;
`;
const Name = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Trans = styled.div`
  width: 15%;
`;
const Action = styled.div`
  width: 13%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 2rem;
  width: 7rem;
  border-radius: 0.7rem;
  border: 1px solid #d7e1f4;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
`;
const H3 = styled.h3`
  width: 13%;
  font-size: 12px;
  color: #4c689e;
  font-weight: 600;
`;
const Stats = styled.h3`
  width: 13%;
  font-size: 12px;
  color: #4c689e;
  font-weight: 600;
  ${(props) =>
    props.type === "Initiated" &&
    css`
      color: #ffb547;
    `}
  ${(props) =>
    props.type === "Failed" &&
    css`
      color: #ee5d50;
    `}
  ${(props) =>
    props.type === "Successful" &&
    css`
      color: #2dae32;
    `}
`;
const H6 = styled.h6`
  text-align: center;
  width: 40%;
  font-size: 16px;
  font-weight: 600;
  color: #4169e1;
  cursor: pointer;
  padding: 0.2rem;
  border-radius: 2px;
  background-color: #eff3fb;
`;
const H4 = styled.h4`
  font-size: 12px;
  color: #4c689e;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;
const H5 = styled.h5`
  font-size: 12px;
  color: #4c689e;
  font-weight: 400;
`;

export default function TransactionHistory() {
  return (
    <Container>
      <SideNav />
      <Main>
        <Header>Transaction History</Header>
        <section>
          <Input>
            <FaFilter
              style={{
                width: "1rem",
                height: "1rem",
                color: "#4c689e",
              }}
            />{" "}
            Filter
          </Input>

          <div>
            <Head>
              <H2>Services</H2>
              <H2>Amount</H2>
              <H2>Total Amount</H2>
              <H2>Status</H2>
              <H2>Payment Method</H2>
              <H2>Transaction No</H2>
              <H2>Actions</H2>
            </Head>
            <div>
              {HistoryData.map((data) => {
                return (
                  <ListComp>
                    <Name>
                      {data.icon}
                      <div>
                        <H4>{data.name}</H4>
                        <H5>{data.number}</H5>
                      </div>
                    </Name>
                    <H3>{data.amount}</H3>
                    <H3>{data.totalAmount}</H3>
                    <Stats type={data.status}>{data.status}</Stats>
                    <H3>{data.paymentMethod}</H3>

                    <Trans>
                      <H5>{data.transactionNo}</H5>
                      <H5>{data.dateTime}</H5>
                    </Trans>

                    <Action>
                      <H6>{data.action}</H6>
                    </Action>
                  </ListComp>
                );
              })}
            </div>
          </div>
        </section>
      </Main>
    </Container>
  );
}
