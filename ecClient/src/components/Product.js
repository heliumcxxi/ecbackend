import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InfoContainer = styled.div`
  opacity: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  z-index: 3;
  transition: all 0.5s ease;
  border-radius: 10px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 350px;
  width: 100%;
  min-width: 280px;
  flex: 1;
  flex-basis: 20%;
  align-items: center;
  justify-content: center;
  margin: 5px;
  position: relative;
  background-color: aliceblue;
  border-radius: 10px;

  &:hover ${InfoContainer} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  height: 200px;
  width: 200px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.main};
    transform: scale(1.1);
  }
`;

Icon.defaultProps = {
  theme: {
    main: "white",
  },
};

const theme = {
  main: "red",
};

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <InfoContainer>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon theme={theme}>
          <FavoriteBorderOutlined />
        </Icon>
      </InfoContainer>
    </Container>
  );
};

export default Product;
