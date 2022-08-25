import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import img from "../images/IMG_8323.JPG";

const Container = styled.div``;
const RegContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)),
    url(${img});
  background-position: 15% 55%;
  height: 600px;
  width: 900px;
  border: 1px solid black;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
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
  margin-top: 1rem;

  &:hover {
    background-color: #1882a8;
  }
`;

const Image = styled.img`
  height: 70%;
  width: 70%;
`;

const Register = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <RegContainer>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="First Name"></Input>
          <Input placeholder="Last Name"></Input>
          <Input placeholder="Email"></Input>
          <Button>Register</Button>
          <Link>Have an account? Sign In</Link>
        </Form>
      </RegContainer>
      <Newsletter />
    </Container>
  );
};

export default Register;
