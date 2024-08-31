import React from "react";
import { BiChevronLeft, BiLogoGoogle } from "react-icons/bi";
import { styled } from "styled-components";
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Main = styled.div`
  width: 80%;
`;
const H1 = styled.h1`
  text-align: center;
  background-color: transparent;
  color: #4c689e;
  font-size: 25px;
  margin: 0.5rem;
  font-weight: 600;
`;
const H5 = styled.h5`
  color: #2b3b5a;
  font-size: 14px;
  font-weight: 400;
`;
const H5Red = styled.h5`
  color: #f44646;
  font-size: 14px;
  font-weight: 400;
`;
const H4 = styled.h4`
  text-align: center;
  background-color: transparent;
  color: #d7e1f4;
`;
const H2 = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #3c517c;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const First = styled.div`
  width: 40%;
  margin-top: 1rem;
  border-radius: 10px;
`;
const InputGroup = styled.div`
  margin: 0.5rem 0;
`;
const Form = styled.form`
  width: 40%;
  margin-top: 1rem;
  background-color: #fff;
  border: 1px solid #c7dbef;
  border-radius: 10px;
`;
const Label = styled.label`
  display: inline-block;
  margin: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1px;
`;
const Input = styled.input`
  display: block;
  background-color: #fff;
  border: 1px solid #c7dbef;
  color: #2b3b5a;
  width: 85%;
  outline: none;
  height: 1.2rem;
  border-radius: 10px;
  padding: 10px;
  margin: 0 auto;
  font-size: 1rem;
  letter-spacing: 2px;
  font-weight: 400;
`;
const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 1rem;
  align-items: center;
`;
const FormFooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 1rem;
  gap: 0.5rem;
  align-items: center;
`;
const Google = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #3c517c;
  padding: 0.6rem 1rem;
  text-align: center;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px 5px rgba(8, 55, 91, 0.1);
`;
const Center = styled.div`
  text-align: center;
`;

const Button = styled.button`
  outline: 0;
  border: 0;
  border-radius: 0.5rem;
  width: 90%;
  margin: 0.5rem 1rem;
  height: 2.2rem;
  color: #fff;
  background-color: #4169e1;
  cursor: pointer;
`;

export default function Login() {
  return (
    <Container>
      <SideNav />
      <Main>
        <Header>
          <BiChevronLeft />
          Home
        </Header>
        <Section>
          <First>
            <H1>Login</H1>
            <Google>
              <BiLogoGoogle
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: "#4c689e",
                }}
              />{" "}
              Login with Google
            </Google>
            <H4>Or continue with</H4>
          </First>
          <Form action="">
            <InputGroup>
              <Label for="">Email Address</Label>
              <Input type="email" defaultValue="wabdotmail@gmail.com" />
            </InputGroup>
            <InputGroup>
              <Label for="">Password</Label>
              <Input type="password" defaultValue="Gabon4351" />
            </InputGroup>
            <FormFooter>
              <FormFooterDiv>
                <Input
                  type="checkbox"
                  style={{ height: "1rem", width: "1rem" }}
                />
                <H5>Remember me</H5>
              </FormFooterDiv>
              <H5Red>Recover password</H5Red>
            </FormFooter>
            <Center>
              <Button>Proceed</Button>
            </Center>
          </Form>
        </Section>
      </Main>
    </Container>
  );
}
