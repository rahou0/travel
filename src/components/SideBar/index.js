import React from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";
import { HiHome } from "react-icons/hi";
import {
  RiLoginBoxFill,
  RiLogoutBoxFill,
  RiArrowUpSFill,
  RiArrowDownSFill,
} from "react-icons/ri";
import { MdContacts } from "react-icons/md";
import { SiAboutDotMe } from "react-icons/si";
const SideBarContainer = styled.div`
  margin-top: 76px;
  display: flex;
  width: 250px;
  flex-direction: column;
  background-color: #002967;
  text-align: center;
  height: 90.4%;
`;
const Data = [
  {
    path: "/",
    title: "Home",
    icon: <HiHome />,
  },
  {
    path: "/users",
    title: "Users",
    icon: <RiLogoutBoxFill />,
  },
  { path: "/add", title: "Add Places", icon: <SiAboutDotMe /> },
  { path: "/settings", title: "Settings", icon: <MdContacts /> },
  { path: "/logout", title: "logout", icon: <RiLoginBoxFill /> },
];
export default function SideBar() {
  return (
    <SideBarContainer>
      {Data.map((item, index) => {
        return <SubMenu item={item} key={index} />;
      })}
    </SideBarContainer>
  );
}
