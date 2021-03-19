import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MenuToggle } from "./MenuToggle";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AuthContainer from "./AuthContainer";
import MobileProfileContainer from "./MobileProfileContainer";
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
  background-color: #0066ff;
  width: 75%;
  flex-direction: column;
  position: fixed;
  top: 75px;
  right: 0;
`;
const LinkItem = styled.li`
  width: 100%;
  border-bottom: 1px solid #fff;
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
    background: #59ff52;
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
          {localStorage.getItem("token") && <MobileProfileContainer />}
          {localStorage.getItem("token") && (
            <LinkItem>
              <LinkName onClick={() => SetOpen(!isOpen)} to="/dashboard">
                Dashboard
              </LinkName>
            </LinkItem>
          )}
          <LinkItem>
            <LinkName onClick={() => SetOpen(!isOpen)} to="/home">
              {t("home")}
            </LinkName>
          </LinkItem>
          <LinkItem>
            <LinkName onClick={() => SetOpen(!isOpen)} to="/contribute">
              {t("contribute")}
            </LinkName>
          </LinkItem>
          <LinkItem>
            <LinkName onClick={() => SetOpen(!isOpen)} to="/faq">
              {t("faq")}
            </LinkName>
          </LinkItem>
          <LinkItem>
            <LinkName onClick={() => SetOpen(!isOpen)} to="/contact">
              {t("contact")}
            </LinkName>
          </LinkItem>
          {!localStorage.getItem("token") && (
            <LinkItem>
              <LinkName onClick={() => SetOpen(!isOpen)} to="/login">
                Login
              </LinkName>
            </LinkItem>
          )}
          {localStorage.getItem("token") ? (
            <LinkItem>
              <LinkName onClick={() => SetOpen(!isOpen)} to="/logout">
                Logout
              </LinkName>
            </LinkItem>
          ) : (
            <LinkItem>
              <LinkName onClick={() => SetOpen(!isOpen)} to="/registre">
                Registre
              </LinkName>
            </LinkItem>
          )}
        </LinkWrapper>
      )}
    </NavLinksContainer>
  );
}

export default MobileNavLinks;
