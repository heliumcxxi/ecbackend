import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.4rem;
  color: whitesmoke;
`;

const Announcement = () => {
  return <Container>Your announcements show in here</Container>;
};

export default Announcement;
