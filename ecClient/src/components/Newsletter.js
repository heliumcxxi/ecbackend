import {
  ArrowForwardIosOutlined,
  FacebookRounded,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const InfoContainer = styled.div``;

const Title = styled.h3``;

const Desc = styled.div``;

const EmailContainer = styled.div`
  height: 200px;
  width: 66%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  height: 30px;
  width: 50%;

  &:focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  height: 36px;
`;

const IconContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;
const Icon = styled.div`
  padding: 5px;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    color: grey;
    transform: scale(1.2);
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>Get The Latest From Jewellry Quest!</Title>
        <Desc>
          Be the first to hear about new arrivals, promotions, style inspiration
          and exclusive sneak peeks
        </Desc>
      </InfoContainer>
      <EmailContainer>
        <Input placeholder="Enter Email Address" />
        <SendButton>
          <ArrowForwardIosOutlined />
        </SendButton>
      </EmailContainer>
      <IconContainer>
        <Icon>
          <FacebookRounded />
        </Icon>
        <Icon>
          <Instagram />
        </Icon>
        <Icon>
          <WhatsApp />
        </Icon>
      </IconContainer>
    </Container>
  );
};

export default Newsletter;
