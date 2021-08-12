import React from "react";
import styled from "styled-components";

const FooterText = styled.footer`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
`;
const Icons = styled.a`
  font-weight: 400;
  font-size: 12px;
  color: #828282;
  text-decoration: none;
`;

const Username = styled.span`
  text-decoration: underline;
  font-weight: 700;
  display: inline;
`;

const Footer = () => {
  return (
    <FooterText>
      <Icons href="https://material.io/resources/icons/?style=round">
        Icons: https://material.io/resources/icons/?style=round
      </Icons>
      <p>
        created by <Username>alvintriseptia</Username> - devChallenges.io
      </p>
    </FooterText>
  );
};

export default Footer;
