import React from "react";
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
const FormRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Progress = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  width: 40%;
`;
const Bar = styled.div`
  width: 34%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H3 = styled.h3`
  color: #4c689e;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem;
  text-align: center;
`;

const InputGroup = styled.div`
  margin: 0.5rem 0;
`;
const H4 = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: #4c689e;
`;
const H4A = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: #4169e1;
`;
const BarDiv = styled.div`
  width: 90%;
  background-color: #d7e1f4;
  height: 7px;
  border-radius: 10px;
  margin: 10px;
`;
const BarDivA = styled.div`
  width: 90%;
  background-color: #4169e1;
  height: 7px;
  border-radius: 10px;
  margin: 10px;
`;
const Option = styled.option`
  color: #869dcb;
  font-size: 1rem;
  font-weight: 400;
`;
const Form = styled.form`
  width: 40%;
  margin-top: 1rem;
  background-color: #f7f9fd;
  border: 1px solid #c7dbef;
`;
const Label = styled.label`
  display: inline-block;
  margin: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: #4c689e;
`;
const Input = styled.input`
  display: block;
  background-color: #fff;
  border: 1px solid #c7dbef;
  color: #2b3b5a;
  width: 90%;
  color: #869dcb;
  outline: none;
  height: 1.2rem;
  border-radius: 10px;
  padding: 10px;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: 400;
`;
const Select = styled.select`
  background-color: #fff;
  border: 1px solid #c7dbef;
  width: 85%;
  outline: none;
  height: 2.5rem;
  border-radius: 10px;
  padding: 10px;
  margin: 0 -1rem 0 1rem;
  font-size: 1rem;
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

export default function AirtimeToCash() {
  return (
    <Container>
      <SideNav />
      <Main>
        <Header>Airtime to Cash</Header>
        <Section>
          <Progress>
            <Bar>
              <H4A>Fill Info</H4A>
              <BarDivA></BarDivA>
            </Bar>
            <Bar>
              <H4>Make Payment</H4>
              <BarDiv></BarDiv>
            </Bar>
            <Bar>
              <H4>View Receipt</H4>
              <BarDiv></BarDiv>
            </Bar>
          </Progress>
          <Form>
            <H3>Airtime to Cash</H3>
            <FormRow>
              <InputGroup>
                <Label for="">Select Network</Label>
                <Select name="" id="">
                  <Option value="">Mtn</Option>
                  <Option value="">Airtel</Option>
                  <Option value="">Glo</Option>
                  <Option value="">9mobile</Option>
                </Select>
              </InputGroup>
              <InputGroup>
                <Label for="">Phone Number</Label>
                <Input type="number" value="0908499534" />
              </InputGroup>
            </FormRow>
            <InputGroup>
              <Label for="">Amount</Label>
              <Input type="text" value="0908499534" />
            </InputGroup>
            <InputGroup>
              <Label for="">Airtime Share Pin</Label>
              <Input type="number" value="908499534" />
            </InputGroup>

            <Button>Proceed</Button>
          </Form>
        </Section>
      </Main>
    </Container>
  );
}
