import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const LinkWrapper = styled.ul`
  height: 100%;
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
`;
const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: black;
  font-weight: 500;
  font-size: 15px;
  align-items: center;
  justify-content: center;
`;
const LinkName = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background: #59ff52;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
    filter: contrast(0.6);
  }
`;
function NavLinks() {
  const { t, i18n } = useTranslation();

  return (
    <NavLinksContainer>
      <LinkWrapper>
        <LinkItem>
          <LinkName to="/#">{t("home")}</LinkName>
        </LinkItem>
        <LinkItem>
          <LinkName to="/contribute">{t("contribute")}</LinkName>
        </LinkItem>
        <LinkItem>
          <LinkName to="/faq">{t("faq")}</LinkName>
        </LinkItem>
        <LinkItem>
          <LinkName to="/contact">{t("contact")}</LinkName>
        </LinkItem>
      </LinkWrapper>
    </NavLinksContainer>
  );
}

export default NavLinks;
