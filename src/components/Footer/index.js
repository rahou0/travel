import React from "react";
import styled from "styled-components";
import ImageOfBrand from "../../ressources/disney.png";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";
const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #0066ff;
  border: 4px solide;
  border-color: #000;
  flex-direction: column;
  min-height: 310px;
`;
const TopContainer = styled.div`
  border: 4px solide;
  border-color: #000;
  justify-content: space-between;
  margin: ${({ padding }) => (padding ? "25px 0%" : "25px 5%")};
  margin-bottom: 20px;
  padding: ${({ padding }) => (padding ? "25px 0" : "25px 5%")};
  border-top: 2px solid rgba(175, 175, 175, 0.3);
  border-bottom: 2px solid rgba(175, 175, 175, 0.3);
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
`;
const LeftTopContainer = styled.div`
  display: flex;
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ContentContainer = styled.div`
  width: 100px;
  margin-left: ${({ m_left }) => (m_left ? "30px" : "70px")};
  display: flex;
  flex-direction: column;
  text-align: start;
  &:not(:last-of-type) {
    margin-right: 3%;
  }
`;
const Title = styled.h2`
  font-size: 20px;
  color: #fff;
  opacity: 0.75;
  margin-bottom: 10px;
`;
const FooterLink = styled.a`
  text-decoration: none;

  color: #fff;
  opacity: 0.7;
  &:not(:last-of-type) {
    margin-bottom: 10%;
  }
  &:hover {
    text-decoration: ${({ decoration }) =>
      decoration ? decoration : "underline"};
  }
`;
const LogoContainer = styled.div`
  margin-top: 15px;
  max-width: 200px;
  padding: 0 50px;
  margin-left: 50px;
  border-right: 2px solid rgba(255, 255, 255, 0.2);
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  max-height: 150px;
  img {
    height: 100%;
    width: 100%;
  }
`;
function Footer() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <FooterContainer>
      <TopContainer
        direction={isMobile ? "column" : null}
        padding={isMobile ? 1 : null}
        margin={isMobile ? 1 : null}
      >
        <LogoContainer>
          <img src={ImageOfBrand} alt="logo" />
        </LogoContainer>
        <LeftTopContainer>
          <ContentContainer m_left={isMobile?1:null}>
            <Title>Support</Title>
            <FooterLink href="/faq">Help & FAQ</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/">Privacy Policy</FooterLink>
            <FooterLink href="/">Terms of Use</FooterLink>
          </ContentContainer>
          <ContentContainer>
            <Title>Aceses</Title>
            <FooterLink href="/login">Login</FooterLink>
            <FooterLink href="/registre">Join Us</FooterLink>
            <FooterLink href="/contribute">Contribute</FooterLink>
          </ContentContainer>
        </LeftTopContainer>
      </TopContainer>
      <BottomContainer>
        <FooterLink
          decoration={"none"}
          style={{
            marginBottom: "20px",
          }}
        >
          &copy; All Rights reserved, {new Date().getFullYear()}
        </FooterLink>
      </BottomContainer>
    </FooterContainer>
  );
}

export default Footer;
