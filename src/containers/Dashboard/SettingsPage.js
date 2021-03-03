import React from "react";
import styled from "styled-components";
import ImageUser from "../../ressources/image.svg";
const PageContainer = styled.div`
  width: 100%;
  min-height: 100%;
`;
const SettingsPageContainer = styled.div`
  display: flex;
  margin-top: 75px;
  background-color: red;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Image = styled.div`
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
function SettingsPage() {
  return (
    <PageContainer>
      <SettingsPageContainer>
        <Image>
          <img src={ImageUser} alt="profile image" />
        </Image>
        <h1>Settings Panel</h1>
        <h3>User Information</h3>
        <h5>Full Name : Hamani Abderahim</h5>
        <h5>BirthDate : 22/08/1997</h5>
        <h3>Account Information</h3>
        <h5>Create Date : 03/03/2021</h5>
        <h5>UserName : Rahim0</h5>
        <h5>Email : rahim@test.com</h5>
        <h5>Password</h5>
      </SettingsPageContainer>
    </PageContainer>
  );
}

export default SettingsPage;
