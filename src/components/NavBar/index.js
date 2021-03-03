import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { deviceSize } from "../responsive";
import NavLinks from "./NavLinks";
import MobileNavLinks from "./MobileNavLinks";
import i18n from "../../i18n";
import { Marginer } from "../marginer";
const NavBarContainer = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  top: 0;
  overflow: hidden;
  max-width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  min-height: 50px;
  background-color: #f1f4f8;
  z-index: 999;
  transition: "top 0.6s";
`;
const MenuContainer = styled.div`
  display: flex;
  padding: ${({ padding }) => (padding ? "0 " + padding + "px" : "0 60px")};
  align-items: center;
  justify-content: space-between;
`;
const MiddleNavBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const ItemNavBar = styled.a`
  text-decoration: none;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => (color ? "#" + color : "#000")};
  margin-right: 20px;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fdcd73;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
    filter: contrast(0.6);
  }
`;
const LoginButton = styled.a`
  padding: 7px 20px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  border: 3px solid transparent;
  cursor: pointer;
  background: linear-gradient(to left, #0066ff 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    background-position: left bottom;
    border: 3px solid #0066ff;
    color: #0066ff;
  }
`;
const RegistreButton = styled.a`
  padding: 7px 20px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  border: 3px solid transparent;
  background: linear-gradient(to left, #59ff52 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  * &:hover {
    background-position: left bottom;
    border: 3px solid #59ff52;
    color: #59ff52;
  }
`;
const Title = styled.h2`
  font-size: 25px;
  cursor: pointer;
  color: white;
  font-weight: 700;
  color: ${({ color }) => (color ? "#" + color : "#fff")};
  padding-right: 20px;
`;

function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const [activeLang, setActiveLang] = useState("en");
  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
      setActiveLang(ln);
    };
  };
  return (
    <NavBarContainer>
      <MenuContainer padding={isMobile ? 30 : ""}>
        <Title color={"0066ff"}> eramex </Title>
        {!isMobile && <NavLinks />}
        {isMobile && <MobileNavLinks />}

        {!isMobile && (
          <MiddleNavBarContainer>
            <LoginButton>Login</LoginButton>
            <Marginer direction="horizontal" margin={15} />
            <RegistreButton>Registre</RegistreButton>
          </MiddleNavBarContainer>
        )}
      </MenuContainer>
    </NavBarContainer>
  );
}

export default NavBar;
