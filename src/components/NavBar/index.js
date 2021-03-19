import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { deviceSize } from "../responsive";
import NavLinks from "./NavLinks";
import MobileNavLinks from "./MobileNavLinks";
import i18n from "../../i18n";
import AuthContainer from "./AuthContainer";
import IconContainer from "./IconContainer";
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
const Title = styled.h2`
  font-size: 25px;
  cursor: pointer;
  font-weight: 700;
  color: ${({ color }) => (color ? "#" + color : "#fff")};
  padding-right: 20px;
`;
const InTitle = styled.span`
  margin: 0;
  padding: 0;
  opacity: 0.7;
  font-size: 25px;
  font-weight: 700;
  color: ${({ color }) => (color ? "#" + color : "#fff")};
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
        <Title>
          <InTitle color={"0066ff"}>D</InTitle>
          <InTitle color={"59FF52"}>oo</InTitle>
          <InTitle color={"0066ff"}>r</InTitle>
          <InTitle color={"59FF52"}>-</InTitle>
          <InTitle color={"0066ff"}>Dz</InTitle>
        </Title>
        {!isMobile && <NavLinks />}
        {isMobile && <MobileNavLinks />}
        {/* {!isMobile && <AuthContainer />} */}
        {!isMobile && <IconContainer />}
      </MenuContainer>
    </NavBarContainer>
  );
}

export default NavBar;
