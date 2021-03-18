import React from "react";
import { Marginer } from "../marginer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const LoginButton = styled.a`
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
const RegistreButton = styled.a`
  padding: 7px 20px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  border: 3px solid transparent;
  background: linear-gradient(to left, #59ff52 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  * &:hover {
    background-position: left bottom;
    border: 3px solid #59ff52;
    color: #59ff52;
  }
`;
function AuthContainer() {
  function goTo(path) {
    window.location.href = `/${path}`;
  }

  return (
    <Container>
      <LoginButton onClick={() => goTo("login")}>Login</LoginButton>
      <Marginer direction="horizontal" margin={15} />
      <RegistreButton onClick={() => goTo("registre")}>Registre</RegistreButton>
    </Container>
  );
}

export default AuthContainer;
