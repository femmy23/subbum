import React from "react";
import { styled } from "styled-components";
import SideNav from "../Components/SideNav";
import {
  FaArrowRight,
  FaEnvelope,
  FaExclamation,
  FaPhone,
  FaQuestion,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import Header from "../Components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = styled.div`
  width: 80%;
`;
const P = styled.p`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;
  color: #4169e1;
`;
const Span = styled.span`
  font-size: 1rem;
  font-weight: 600;
  /* margin-right: 1rem; */
  color: #4169e1;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
`;
const Card = styled.div`
  width: 20rem;
  border: 1px solid #d7e1f4;
  border-radius: 1rem;
  padding: 0.6rem;
  margin: 0.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const H2 = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #4169e1;
  margin: 0.5rem 0;
`;
const H3 = styled.h3`
  color: #4c689e;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem;
  text-align: center;
`;

const H4 = styled.h4`
  margin: 0.5rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: #6882b6;
`;

export default function Support() {
  return (
    <Container>
      <SideNav />
      <Main>
        <Header>Help and Support</Header>
        <Section>
          <Cards>
            <Card>
              <FaQuestion
                style={{
                  width: ".9rem",
                  height: ".9rem",
                  padding: "1.5rem",
                  backgroundColor: "#EE5D50",
                  color: "#fff",
                  borderRadius: "1rem",
                  marginRight: "1rem",
                }}
              />
              <div>
                <H4>Frequently Asked Questions</H4>
                <H2>See FAQ</H2>
              </div>
            </Card>
            <Card>
              <FaEnvelope
                style={{
                  width: ".9rem",
                  height: ".9rem",
                  padding: "1.5rem",
                  backgroundColor: "#FFB547",
                  color: "#fff",
                  borderRadius: "1rem",
                  marginRight: "1rem",
                }}
              />
              <div>
                <H4>Live Chat</H4>
                <H2>
                  Chat Now <FaArrowRight />
                </H2>
              </div>
            </Card>
          </Cards>
          <Cards>
            <Card>
              <FaWhatsapp
                style={{
                  width: ".9rem",
                  height: ".9rem",
                  padding: "1.5rem",
                  backgroundColor: "#2DAE32",
                  color: "#fff",
                  borderRadius: "1rem",
                  marginRight: "1rem",
                }}
              />
              <div>
                <H4>Whatsapp</H4>
                <H2>
                  Drop A Message <FaArrowRight />
                </H2>
              </div>
            </Card>
            <Card>
              <FaPhone
                style={{
                  width: ".9rem",
                  height: ".9rem",
                  padding: "1.5rem",
                  backgroundColor: "#4169E1",
                  color: "#fff",
                  borderRadius: "1rem",
                  marginRight: "1rem",
                }}
              />
              <div>
                <H4>Phone Call</H4>
                <H2>
                  Call Us <FaArrowRight />
                </H2>
              </div>
            </Card>
          </Cards>
          <Cards>
            <Card>
              <FaExclamation
                style={{
                  width: ".9rem",
                  height: ".9rem",
                  padding: "1.5rem",
                  backgroundColor: "#EE5D50",
                  color: "#fff",
                  borderRadius: "1rem",
                  marginRight: "1rem",
                }}
              />
              <div>
                <H4>Report Our Support</H4>
                <H2>
                  Not Satisfied
                  <FaArrowRight />
                </H2>
              </div>
            </Card>
            <Card>
              <FaStar
                style={{
                  width: ".9rem",
                  height: ".9rem",
                  padding: "1.5rem",
                  backgroundColor: "#2DAE32",
                  color: "#fff",
                  borderRadius: "1rem",
                  marginRight: "1rem",
                }}
              />
              <div>
                <H4>Review Our App</H4>
                <H2>Coming Soon</H2>
              </div>
            </Card>
          </Cards>
        </Section>
      </Main>
    </Container>
  );
}
