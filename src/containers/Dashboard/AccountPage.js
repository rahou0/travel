import React, { useState } from "react";
import styled from "styled-components";
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;
const ProfileContainer = styled.div`
  display: flex;
  max-width: 100%;
  margin-top: 70px;
  background-color: #f1f4f8;
  padding: 30px 20%;
  @media (max-width: 992px) {
    padding: 30px 8%;
  }
  flex-direction: column;
  height: 100%;
`;
const InformationContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  padding: 20px 0px;
  input {
    font-size: 16px;
    font-weight: 500;

    width: 75%;
    @media (max-width: 992px) {
      width: 100%;
    }
    height: 50px;
    &:focus {
      outline: none !important;
      border: 1px solid #719ece;
      box-shadow: 0 0 10px #719ece;
    }
  }
  label {
    font-size: 18px;
    font-weight: 600;
    @media (max-width: 768px) {
      padding-bottom: 10px;
    }
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px 0px;
`;
const SaveButton = styled.a`
  padding: 7px 20px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  border: 3px solid transparent;
  cursor: pointer;
  background: linear-gradient(to left, #0066ff 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    background-position: left bottom;
    border: 3px solid #0066ff;
    color: #0066ff;
  }
`;

function AccountPage() {
  const [isDisbled, setDisbled] = useState(true);
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [repeatedPassowrd, setReapetedPassword] = useState("");
  const [newPassowrd, setNewPassword] = useState("");
  function handleClick(e) {
    if (!isDisbled) {
      if (
        email !== "" &&
        passowrd !== "" &&
        repeatedPassowrd !== "" &&
        newPassowrd !== "" &&
        newPassowrd === repeatedPassowrd
      )
        setDisbled(!isDisbled);
      else {
      }
    } else {
      setDisbled(!isDisbled);
    }
  }
  return (
    <PageContainer>
      <ProfileContainer>
        <h2>Account Information</h2>
        <InformationContainer>
          <InputContainer>
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="rahim@rahim.com"
              type="text"
              disabled={isDisbled}
            />
          </InputContainer>
          <InputContainer>
            <label>{isDisbled ? "Password: " : "Your password"}</label>
            <input
              value={passowrd}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*************"
              type="password"
              disabled={isDisbled}
            />
          </InputContainer>
          {!isDisbled && (
            <InputContainer>
              <label>New password</label>
              <input
                value={newPassowrd}
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                disabled={isDisbled}
              />
            </InputContainer>
          )}
          {!isDisbled && (
            <InputContainer>
              <label>Repeat password</label>
              <input
                value={repeatedPassowrd}
                onChange={(e) => setReapetedPassword(e.target.value)}
                type="password"
                disabled={isDisbled}
              />
            </InputContainer>
          )}
          <ButtonsContainer>
            <SaveButton onClick={handleClick}>
              {isDisbled ? "Update" : "Save"}
            </SaveButton>
          </ButtonsContainer>
        </InformationContainer>
      </ProfileContainer>
    </PageContainer>
  );
}
export default AccountPage;
