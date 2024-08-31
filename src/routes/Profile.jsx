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
  padding: 0.5rem 1.1rem;
  border-radius: 1rem;
  background-color: #d7e1f4;
  margin-right: 1rem;
  color: #4169e1;
`;
const Img = styled.img`
  margin-bottom: 0.5rem;
`;
const Section = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: fle;
`;
const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.3rem 0;
`;
const H3 = styled.h3`
  color: #4c689e;
  font-size: 1rem;
  font-weight: 600;
`;
const H4 = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  color: #4c689e;
`;
const Card = styled.div`
  width: 20rem;
  border: 1px solid #d7e1f4;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Type = styled.div`
  width: 20rem;
  border: 1px solid #d7e1f4;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const InputGroup = styled.div`
  margin: 0.5rem 0;
`;
const Center = styled.div`
  text-align: center;
`;
const Form = styled.form`
  width: 100%;
  border-radius: 10px;
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

export default function Profile() {
  return (
    <Container>
      <SideNav />
      <Main>
        <Header />
        <Section>
          <div>
            <Card>
              <Img src="./image.png" alt="" />
              <P style={{ textAlign: "center", display: "flex" }}>
                Upload Image
              </P>
            </Card>
            <Card>
              <List>
                <H4>Name</H4>
                <H3>Lawal Wahab Babatunde</H3>
              </List>
              <List>
                <H4>Email</H4>
                <H3>wabdotmail@gmail.com</H3>
              </List>
              <List>
                <H4>Phone Number</H4>
                <H3>0906 856 2949</H3>
              </List>
              <List>
                <H4>Account Status</H4>
                <H3>active</H3>
              </List>
              <List>
                <H4>Referral Link</H4>
                <H3>www.subsum.com/tre/wd...</H3>
              </List>
              <List>
                <H4>Account Status</H4>
                <H3>active</H3>
              </List>
              <List>
                <H4></H4>
                <P>copy</P>
              </List>
              <List>
                <P>Edit Details</P>
                <H4></H4>
              </List>
            </Card>
          </div>
          <div class="right">
            <Type>
              <H3>
                <Span>Change Password</Span>
              </H3>
              <H3>Change Pin</H3>
            </Type>
            <Card>
              <Form action="">
                <InputGroup>
                  <Label for="">Current Password</Label>
                  <Input type="password" placeholder="Enter Current Password" />
                </InputGroup>
                <InputGroup>
                  <Label for="">New Password</Label>
                  <Input type="password" placeholder="Enter New Password" />
                </InputGroup>
                <InputGroup>
                  <Label for="">Confirm Password</Label>
                  <Input type="password" placeholder="Enter New Password" />
                </InputGroup>

                <Center>
                  <Button>Proceed</Button>
                </Center>
              </Form>
            </Card>
          </div>
        </Section>
      </Main>
    </Container>
  );
}
