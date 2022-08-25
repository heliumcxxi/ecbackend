import { useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.h1`
  padding: 2rem;
  text-align: center;
`;

const Success = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace("http://localhost:3000/");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        Your payment is successful! Now redirecting you to Home page...
      </Container>
      <Newsletter />
    </>
  );
};

export default Success;
