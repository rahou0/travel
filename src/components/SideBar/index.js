import React from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";
import { HiHome } from "react-icons/hi";
import { RiLoginBoxFill, RiLogoutBoxFill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";
import { SiAboutDotMe } from "react-icons/si";
const SideBarContainer = styled.div`
  margin-top: 76px;
  display: flex;
  width: 250px;
  flex-direction: column;
  background-color: #002967;
  text-align: center;
  min-height: 100%;
`;
const Data = [
  {
    path: "/dashboard/",
    title: "Home",
    icon: <HiHome />,
  },
  {
    path: "/dashboard/users",
    title: "Users",
    icon: <RiLogoutBoxFill />,
  },
  { path: "/dashboard/add", title: "Article", icon: <SiAboutDotMe /> },
  { path: "/dashboard/account", title: "Account", icon: <MdContacts /> },
  { path: "/dashboard/profile", title: "Profile", icon: <MdContacts /> },
  { path: "/dashboard/logout", title: "logout", icon: <RiLoginBoxFill /> },
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
