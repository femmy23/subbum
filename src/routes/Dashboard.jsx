import React from "react";
import { styled } from "styled-components";
import Button from "../Components/Button";
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = styled.div`
  width: 80%;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Span = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;
  color: #4169e1;
`;

const H4 = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 0.8rem;

  color: #3c517c;
`;
const H6 = styled.h6`
  font-size: 1.1rem;
  font-weight: 600;
  color: #3c517c;
  margin-top: 0.5rem;
`;
const H1 = styled.h1`
  font-size: 1.1rem;
  font-weight: 600;
  margin-left: 0.5rem;
  color: #3c517c;
`;
const H5 = styled.h5`
  font-size: 1rem;
  /* margin: 0.3rem 0; */
  font-weight: 400;
  color: #3c517c;
`;
const Section = styled.section`
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-around;
`;

const RightImg = styled.img`
  margin: 1rem;
  width: 32rem;
  height: 18rem;
`;
const Card = styled.div`
  width: 80%;
  border: 1px solid #d7e1f4;
  border-radius: 1rem;
  padding: 2rem;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:nth-child(2) {
    display: flex;
    gap: 10px;
    gap: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
const P = styled.p`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  color: #4169e1;
`;

export default function Dashboard() {
  return (
    <Container>
      <SideNav />
      <Main>
        <Header />
        <Section>
          <div class="left">
            <Card>
              <div>
                <H5>Wallet Balance</H5>
                <H4>₦3000</H4>
              </div>
              <div>
                <Button>Fund Wallet</Button>
              </div>
            </Card>
            <Card>
              <div>
                <H5>Referral</H5>
              </div>
              <Flex>
                <H5>Referral code:</H5>
                <H1>18/52ha089</H1>
              </Flex>
              <div>
                <Span>copy</Span>
                <Span>edit</Span>
                <Span>share</Span>
              </div>
            </Card>
            <Card>
              <div>
                <H5>Total referral made</H5>
                <H6>0</H6>
                <br />
                <P>Cashout</P>
              </div>
              <div>
                <H5>Current wallet Balance</H5>
                <H6>₦0.00</H6>
              </div>
            </Card>
          </div>
          <div class="right">
            <RightImg src="./card.png" alt="" />
          </div>
        </Section>
      </Main>
    </Container>
  );
}
