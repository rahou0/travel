import React from "react";
import { Marginer } from "../marginer";
import styled from "styled-components";
import { AiOutlineAppstore } from "react-icons/ai";
import { RiLogoutBoxFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import ImageUser from "../../ressources/agriculture.jpg";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const NotificationIcon = styled(IoIosNotifications)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  :hover {
    color: #0066ff;
  }
`;
const AppsIcon = styled(AiOutlineAppstore)`
  width: 22px;
  height: 22px;
  cursor: pointer;
  :hover {
    color: #0066ff;
  }
`;
const LogoutIcon = styled(RiLogoutBoxFill)`
  width: 22px;
  height: 22px;
  cursor: pointer;
  :hover {
    color: #0066ff;
  }
`;
const ProfilePic = styled.div`
  width: 35px;
  height: 35px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
function IconContainer() {
  return (
    <Container>
      <LogoutIcon title="LogOut"/>
      <Marginer direction="horizontal" margin={20} />
      <NotificationIcon title="Notification" />
      <Marginer direction="horizontal" margin={20} />
      <AppsIcon title="Dashboard" />
      <Marginer direction="horizontal" margin={20} />
      <ProfilePic>
        <img src={ImageUser} alt="profile image" />
      </ProfilePic>
    </Container>
  );
}

export default IconContainer;
