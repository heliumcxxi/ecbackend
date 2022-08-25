import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: contain;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h1``;

const ProductInfo = styled.h5`
  width: 300px;
  text-align: justify;
  margin-bottom: 3rem;
`;

const Price = styled.span`
  font-size: 1.3rem;
  padding: 2rem;
  border-top: 1px solid grey;
  width: 200px;
  display: flex;
  justify-content: center;
`;

const AddContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Select = styled.select`
  margin: 0.5rem;
  width: 300px;
  height: 40px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    font-weight: 700;
  }
`;

const Option = styled.option``;

const Amount = styled.span`
  margin: 1rem;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  border-style: none;
  background-color: black;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #1882a8;
  }
`;

const ShippingInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid grey;
  padding: 0 10rem;
  margin: 3rem;
`;

const ShippingInfo = styled.div`
  padding: 1rem 4rem;
  flex: 1;
`;
const Title = styled.h3``;

const Desc = styled.div``;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const changeQuantity = (type) => {
    if (type === "minus") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        size: size === "" ? product.size[0] : size,
        color: color === "" ? product.color[0] : color,
      })
    );
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <img
            style={{ height: "520px", width: "520px" }}
            src={product.img}
            alt="product image"
          />
        </ImageContainer>
        <InfoContainer>
          <Header>{product.title}</Header>
          <ProductInfo>{product.desc}</ProductInfo>
          <Price>{`$ ${product.price}`}</Price>

          <Select onChange={(e) => setColor(e.target.value)}>
            {product.color?.map((c) => (
              <Option key={c}>{c}</Option>
            ))}
          </Select>

          <Select onChange={(e) => setSize(e.target.value)}>
            {product.size?.map((s) => (
              <Option key={s}>{s}</Option>
            ))}
          </Select>

          <AddContainer>
            <Remove onClick={() => changeQuantity("minus")} />
            <Amount>{quantity}</Amount>
            <Add onClick={() => changeQuantity("add")} />
          </AddContainer>
          <Button onClick={handleClick}>Add to Cart</Button>
        </InfoContainer>
      </Wrapper>

      <ShippingInfoContainer>
        <ShippingInfo>
          <Title>Gift-giving made easy</Title>
          <Desc>
            Create your personalised message at the checkout, then we’ll pack
            your gifts for you (and remove the price tags!).
          </Desc>
        </ShippingInfo>
        <ShippingInfo>
          <Title>1-2 days shipping</Title>
          <Desc>
            Enjoy FREE shipping for order over $500. – it’s automatically
            applied to your order during checkout. We will process orders Monday
            to Saturday except Sunday and Public Holiday.
          </Desc>
        </ShippingInfo>
      </ShippingInfoContainer>

      <Newsletter />
    </Container>
  );
};

export default Product;
