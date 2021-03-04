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
const WarnignText = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
`;
const WarningContainer = styled.div`
  width: 100%;
  text-align: end;
  padding-bottom: 20px;
`;
function AccountPage() {
  const [errors, setErrors] = useState({
    email: { value: false, msg: "" },
    password: { value: false, msg: "" },
    newPassword: { value: false, msg: "" },
    repeatedPassword: { value: false, msg: "" },
  });
  const [isDisbled, setDisbled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setReapetedPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  function CheckInputs() {
    if (password === "") {
      setErrors((prevState) => ({
        ...prevState,
        password: { value: true, msg: "This Field is Empty" },
      }));
    } else {
      if (password.length < 8)
        setErrors((prevState) => ({
          ...prevState,
          password: { value: true, msg: "Password must be greater than 8!" },
        }));
    }
    if (newPassword === "") {
      setErrors((prevState) => ({
        ...prevState,
        newPassword: { value: true, msg: "This Field is Empty" },
      }));
    } else {
      if (newPassword.length < 8)
        setErrors((prevState) => ({
          ...prevState,
          newPassword: {
            value: true,
            msg: "Password must be greater than 8!",
          },
        }));
    }
    if (repeatedPassword === "") {
      setErrors((prevState) => ({
        ...prevState,
        repeatedPassword: { value: true, msg: "This Field is Empty" },
      }));}
    if (newPassword !== repeatedPassword) {
      setErrors((prevState) => ({
        ...prevState,
        newPassword: {
          value: true,
          msg: "Password does not match",
        },
        repeatedPassword: {
          value: true,
          msg: "Password does not match",
        },
      }));
    }
    if (email === "") {
      setErrors((prevState) => ({
        ...prevState,
        email: { value: true, msg: "This Field is Empty" },
      }));
    } else {
      if (!/.+@.+\.[A-Za-z]+$/.test(email))
        setErrors((prevState) => ({
          ...prevState,
          email: { value: true, msg: "Email Invalid!" },
        }));
    }
  }
  function handleClick(e) {
    if (!isDisbled) {
      CheckInputs();
      if (
        email !== "" &&
        password !== "" &&
        repeatedPassword !== "" &&
        newPassword !== "" &&
        newPassword === repeatedPassword
      )
        setDisbled(!isDisbled);
        //send request
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
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prevState) => ({
                  ...prevState,
                  email: { value: false, msg: "" },
                }));
              }}
              placeholder="rahim@rahim.com"
              type="text"
              disabled={isDisbled}
            />
          </InputContainer>
          <WarningContainer>
            {errors.email.value && (
              <WarnignText>{errors.email.msg}</WarnignText>
            )}
          </WarningContainer>
          <InputContainer>
            <label>{isDisbled ? "Password: " : "Your password"}</label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prevState) => ({
                  ...prevState,
                  password: { value: false, msg: "" },
                }));
              }}
              placeholder="*************"
              type="password"
              disabled={isDisbled}
            />
          </InputContainer>
          <WarningContainer>
            {errors.password.value && (
              <WarnignText>{errors.password.msg}</WarnignText>
            )}
          </WarningContainer>
          {!isDisbled && (
            <InputContainer>
              <label>New password</label>
              <input
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  setErrors((prevState) => ({
                    ...prevState,
                    newPassword: { value: false, msg: "" },
                  }));
                }}
                type="password"
                disabled={isDisbled}
              />
            </InputContainer>
          )}
          <WarningContainer>
            {errors.newPassword.value && (
              <WarnignText>{errors.newPassword.msg}</WarnignText>
            )}
          </WarningContainer>
          {!isDisbled && (
            <InputContainer>
              <label>Repeat password</label>
              <input
                value={repeatedPassword}
                onChange={(e) => {
                  setReapetedPassword(e.target.value);
                  setErrors((prevState) => ({
                    ...prevState,
                    repeatedPassword: { value: false, msg: "" },
                  }));
                }}
                type="password"
                disabled={isDisbled}
              />
            </InputContainer>
          )}
          <WarningContainer>
            {errors.repeatedPassword.value && (
              <WarnignText>{errors.repeatedPassword.msg}</WarnignText>
            )}
          </WarningContainer>
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
