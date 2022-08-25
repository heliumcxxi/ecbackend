import { Add, DeleteOutline, Remove } from "@mui/icons-material";
import { createTheme } from "@mui/system";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import img from "../images/IMG_5787.png";
import { Visa } from "../data";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  background-color: aliceblue;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2``;

const BottomInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: aliceblue;
  margin-left: 8rem;
  margin-bottom: 3rem;
  width: 70%;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

const Product = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #c6c9cf;
  margin: 2rem;
`;

const ProductImg = styled.img`
  height: 25%;
  width: 25%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const ProductTitle = styled.h5``;

const ProductId = styled.span`
  font-size: 0.8rem;
  margin: 0.3rem;
  color: grey;
`;

const ProductMaterial = styled.span`
  font-size: 0.8rem;
  margin: 0.3rem;
  color: grey;
`;

const ProductColor = styled.span`
  font-size: 0.8rem;
  margin: 0.3rem;
  padding-bottom: 1rem;
  color: grey;
`;

const RemoveButton = styled.a`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
`;

const ProductAmountInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10rem;
`;

const ProductPrice = styled.div`
  font-size: 1.3rem;
  margin: 2rem;
`;

const ProductAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Amount = styled.div`
  padding: 1rem;
`;

const Right = styled.div`
  flex: 1;
  width: 50%;
`;

const Summary = styled.div`
  background-color: white;
  margin: 0 1rem;
  padding: 1rem;
`;

const OrderSummary = styled.div`
  flex: 1;
`;

const SummaryTitle = styled.h1`
  font-weight: 600;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border-style: none;
  cursor: pointer;

  &:hover {
    background-color: #1882a8;
  }
`;

const Payment = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img``;

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const checkOut = () => {
    fetch(`${process.env.CLIENT_URL}/checkout` {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <>
      <Announcement />
      <Navbar />
      <Wrapper>
        <TopInfo>
          <Title>Your Bag</Title>
        </TopInfo>
        <BottomInfo>
          <Left>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductImg src={product.img} />
                <ProductInfo>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductId>{product._id}</ProductId>
                  <ProductMaterial>{product.color}</ProductMaterial>
                  <ProductColor>{product.size}</ProductColor>
                  <RemoveButton>
                    <DeleteOutline fontSize="small" />
                    Remove
                  </RemoveButton>
                </ProductInfo>
                <ProductAmountInfo>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductAmount>
                    <Add fontSize="small" />
                    <Amount>{product.quantity}</Amount>
                    <Remove fontSize="small" />
                  </ProductAmount>
                </ProductAmountInfo>
              </Product>
            ))}
          </Left>

          <Right>
            <Summary>
              <OrderSummary>
                <SummaryTitle> Order Summary</SummaryTitle>
              </OrderSummary>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <Button onClick={checkOut}>CHECKOUT NOW</Button>
            </Summary>
            <Payment>
              We accept
              <Image src={Visa} />
              {/* <Image src={Master} /> */}
            </Payment>
          </Right>
        </BottomInfo>
      </Wrapper>
      <Newsletter />
    </>
  );
};

export default Cart;

// Investigate img import problem https://stackoverflow.com/questions/44607396/importing-multiple-files-in-react
