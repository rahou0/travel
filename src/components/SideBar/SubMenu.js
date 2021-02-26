import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideBarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 10px;
  font-weight:500;
  list-style: none;
  text-decoration: none;
  font-size: 18px;
  border-left: 4px solid transparent;

  &:hover {
    background-color: #fff;
    border-left: 4px solid #fdcd73;
    cursor: pointer;
    color: #000;
  }
`;
const SideBarLabel = styled.span`
  margin-left: 26px;
`;
const DropdownLink = styled(Link)`
  display: flex;
  background-color: #363f57;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-weight:500;
  padding-left: 2rem;
  list-style: none;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background-color: #fdcd73;
    cursor: pointer;
    color: #000;
  }
`;
function SubMenu({ item }) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <SideBarLink tp={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SideBarLabel>{item.title}</SideBarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SideBarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path}>
              <div>
                {item.icon}
                <SideBarLabel>{item.title}</SideBarLabel>
              </div>
            </DropdownLink>
          );
        })}
    </>
  );
}

export default SubMenu;
