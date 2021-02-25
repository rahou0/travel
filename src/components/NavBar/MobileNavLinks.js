import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MenuToggle } from "./MenuToggle";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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
  background-color: #161922;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 70px;
  left: 0;
`;
const LinkItem = styled.li`
  width: 100%;
  border-bottom: 1px solid #727796;
  color: white;
  padding: 5px 0;
  height: 60px;
  font-weight: 500;
  align-items: center;
  justify-content: space-evenly;
  font-size: ${({ font }) => (font ? font + "px" : "20px")};
  display: flex;
`;
const LinkName = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
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
const LinkLangWrapper = styled.div`
  display: flex;
`;
function MobileNavLinks() {
  const [isOpen, SetOpen] = useState(false);
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);
  const { t, i18n } = useTranslation();

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => SetOpen(!isOpen)} />
      {isOpen && (
        <LinkWrapper>
          <LinkItem>
            <LinkName onClick={() => SetOpen(!isOpen)} to="/#">
              {t("home")}
            </LinkName>
          </LinkItem>
          <LinkItem>
            <LinkName onClick={() => SetOpen(!isOpen)} to="/#about">
              {t("about")}
            </LinkName>
          </LinkItem>
          <LinkItem>
            <LinkName onClick={() => SetOpen(!isOpen)} to="/#portfolio">
              {t("portfolio")}
            </LinkName>
          </LinkItem>
          <LinkItem>
            <LinkName onClick={() => SetOpen(!isOpen)} to="/#blog">
              {t("blog")}
            </LinkName>
          </LinkItem>
          <LinkItem>
            <LinkName onClick={() => SetOpen(!isOpen)} to="/#contact">
              {t("contact")}
            </LinkName>
          </LinkItem>
        </LinkWrapper>
      )}
    </NavLinksContainer>
  );
}

export default MobileNavLinks;
