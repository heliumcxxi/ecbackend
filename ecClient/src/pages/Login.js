import { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div``;
const LoginContainer = styled.div`
  height: 600px;
  width: 900px;
  border: 1px solid black;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  /* justify-content: center */
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Title = styled.h3`
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  height: 40px;
  width: 250px;
  margin: 1rem;

  &:focus {
    outline: none;
  }
`;

const Link = styled.a`
  font-size: 0.7rem;
  cursor: pointer;
  margin: 1rem;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  width: 250px;
  height: 40px;
  border-style: none;
  cursor: pointer;

  &:disabled {
    color: grey;
    cursor: wait;
  }
`;

const Error = styled.span`
  color: #ff0000;
  font-size: 0.8rem;
  width: 250px;
`;

const Image = styled.img`
  height: 70%;
  width: 70%;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
`;

const JoinHeader = styled.h3`
  text-transform: capitalize;
  margin-top: 1.6rem;
`;

const JoinDesc = styled.span`
  width: 250px;
  margin-top: 12rem;
  margin-bottom: 1rem;
  font-size: 0.5rem;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <LoginContainer>
        <Left>
          <Title>already a member?</Title>
          <Form>
            <Input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <Link>Forgot password?</Link>
            <Button onClick={handleClick} disabled={isFetching}>
              Login
            </Button>
            {error && (
              <Error>
                Your email address and password combination do not match any of
                our accounts.
              </Error>
            )}
          </Form>
        </Left>
        <Right>
          <Image src={require("../images/IMG_5826.png")} />
          <InfoContainer>
            <JoinHeader>join and get all the benefits</JoinHeader>
            <JoinDesc>
              As a Jewellery Quest member, you can enjoy free shipping, birthday
              discount, easy checkout, exclusive offers, special treats, and
              much more.
            </JoinDesc>
            <Button>Become a Member</Button>
          </InfoContainer>
        </Right>
      </LoginContainer>
      <Newsletter />
    </Container>
  );
};

export default Login;
