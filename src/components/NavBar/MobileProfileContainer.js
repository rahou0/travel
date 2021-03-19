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
  padding: 20px 0;
  flex-direction: column;
  border-bottom: 1px solid #fff;
`;
const ProfilePic = styled.div`
  width: 75px;
  height: 75px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const ProfileName = styled.a`
  font-size: 22px;
  color: #59ff52;
  font-weight: 600;
`;

function MobileProfileContainer() {
  return (
    <Container>
      <ProfilePic>
        <img src={ImageUser} alt="profile image" />
      </ProfilePic>
      <Marginer direction="verticale" margin={10} />
      <ProfileName>Hamani Abderahim</ProfileName>
    </Container>
  );
}

export default MobileProfileContainer;
