import React from "react";
import styled from "styled-components";

const NavbarText = styled.nav`
  position: fixed;
  margin-left: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Title = styled.h1`
  font-size: 13px;
  color: #090f31;
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 4rem;
`;

const Item = styled.li`
  font-size: 14px;
  color: #9e9e9e;
  cursor: pointer;
`;

const Span = styled.span`
  color: ${props => props.color};
  font-weight: 700;
`;

const Navbar = () => {
  return (
    <NavbarText>
      <Title>
        <Span color="#F7542E">Dev</Span>challenges.io
      </Title>

      <List>
        <Item>Colors</Item>
        <Item>Typography</Item>
        <Item>Spaces</Item>
        <Item>
          <Span color="#090f31">Buttons</Span>
        </Item>
        <Item>Inputs</Item>
        <Item>Grid</Item>
      </List>
    </NavbarText>
  );
};

export default Navbar;
