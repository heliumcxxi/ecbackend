import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;
const Title = styled.h1`
  margin: 2rem;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div``;
const FilterText = styled.span`
  margin: 2rem;
`;
const Select = styled.select`
  margin: 0.5rem;
  width: 4rem;
  border-style: none;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    font-weight: 700;
    border-bottom: 1px solid #1882a8;
  }

  &:focus {
    outline: none;
  }
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>color</Option>
            <Option>gold</Option>
            <Option>rose gold</Option>
            <Option>silver</Option>
            <Option>platinum</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>size</Option>
            <Option>xs</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">newest</Option>
            <Option value="asc">price (lowest)</Option>
            <Option value="desc">price (highest)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
    </Container>
  );
};

export default ProductList;
