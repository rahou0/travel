import styled from "styled-components";
import React, { useState } from "react";
import ImageOfMessage from "../../ressources/auth.svg";
import { Marginer } from "../../components/marginer";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
import axios from "axios";
const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  background-color: #f1f4f8;
`;
const TextFieldContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  input {
    width: 100%;
    background-color: rgba(0, 102, 255, 0.3);
    font-size: 16px;
    font-weight: 500;
    height: 45px;
    border: none;
    color: #000;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding-left: 15px;
  }
  input:focus {
    outline: none !important;
    border-color: #0066ff;
    box-shadow: 0 0 10px #719ece;
  }
  label {
    font-size: 19px;
    font-weight: 500;
  }
`;
const LoginContainer = styled.div`
  padding: ${({ padding }) => (padding ? "0 0%" : "0 8%")};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 992px) {
    justify-content: start;
  }
`;
const StandOutImage = styled.div`
  height: 40%;
  width: 40%;
  img {
    width: 100%;
    height: 100%;
  }
`;
const TextContainer = styled.div`
  padding-top: 50px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 40%;
  @media (max-width: 992px) {
    min-width: 75%;
  }
  justify-content: center;
`;
const SloganContainer = styled.div`
  width: 100%;
`;

const Text = styled.h1`
  font-size: ${({ size }) => (size ? size + "em" : "18px")};
  text-align: ${({ position }) => (position ? position : "start")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  width: 90%;
  color: ${({ color }) => (color ? "#" + color : "#000")};
`;
const CardLogin = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: flex;
  border-radius: 7px;
  justify-content: space-between;
  padding: 15px 30px;
  width: 100%;
  margin-top: 40px;
  align-items: center;
  min-height: 260px;
  flex-direction: column;
  background-color: ${({ color }) => (color ? "#" + color : "#fff")};
`;
const WarnignText = styled.span`
  color: red;
`;
const WarningContainer = styled.div`
  width: 100%;
  text-align: end;
`;
function LoginPage() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
  const [errors, setErrors] = useState({
    email: { value: false, msg: "" },
    password: { value: false, msg: "" },
    request: { value: false, msg: "" },
  });
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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
    CheckInputs();
    if (password.length >= 8 && email !== "" && /.+@.+\.[A-Za-z]+$/.test(email))
      axios
        .post(
          "http://192.168.1.3:4000/login",
          {
            email:'dskshjk',
            password,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": true,
            },
          }
        )
        .then(function (response) {
          console.log(response);
          if (response.status()) {
            localStorage.setItem("token", response.data);
            window.location.href = `/dashboard`;
          } else {
            setErrors((prevState) => ({
              ...prevState,
              request: { value: true, msg: response.data },
            }));
          }
        })
        .catch(function (error) {
          console.log(error.data);
          setErrors((prevState) => ({
            ...prevState,
            request: { value: true, msg: error.data },
          }));
        });
  }
  return (
    <PageContainer>
      <LoginContainer padding={isTablet}>
        <TextContainer>
          <CardLogin>
            <SloganContainer>
              <Text weight={700} size={isMobile ? 1.5 : isTablet ? 1.5 : 2.5}>
                Hello, Welcome Back
              </Text>
            </SloganContainer>
            <Marginer direction="vertical" margin={30} />
            <TextFieldContainer>
              <label htmlFor="email">Email</label>
              <Marginer direction="vertical" margin={12} />
              <input
                type="email"
                value={email}
                placeholder="example@me.com"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prevState) => ({
                    ...prevState,
                    email: { value: false, msg: "" },
                  }));
                }}
              />
              {errors.email.value && (
                <WarningContainer>
                  <WarnignText>{errors.email.msg}</WarnignText>
                </WarningContainer>
              )}
              <Marginer direction="vertical" margin={20} />
              <label htmlFor="password">Password</label>
              <Marginer direction="vertical" margin={12} />
              <input
                type="password"
                value={password}
                placeholder="********"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prevState) => ({
                    ...prevState,
                    password: { value: false, msg: "" },
                  }));
                }}
                id="password"
              />
              {errors.password.value && (
                <WarningContainer>
                  <WarnignText>{errors.password.msg}</WarnignText>
                </WarningContainer>
              )}
            </TextFieldContainer>
            <Marginer direction="vertical" margin={30} />
            {errors.request.value && (
              <WarningContainer>
                <WarnignText>{errors.request.msg}</WarnignText>
              </WarningContainer>
            )}
            <Button
              onClick={handleClick}
              color={"0066FF"}
              shadow={"0 8px 16px 0 rgba(0, 0, 0, 0.2)"}
              width={"50%"}
              padding={"11px 0"}
              textSize={"22"}
            >
              Login
            </Button>
            <Marginer direction="vertical" margin={10} />
            <Text position={"center"} size={1}>
              Don't Have An Account?{" "}
              <Link
                to="/registre"
                style={{
                  textDecoration: "none",
                  fontSize: "2rm",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                Click Here
              </Link>
            </Text>
          </CardLogin>
        </TextContainer>
        {!isTablet && (
          <StandOutImage>
            <img alt="contact us" src={ImageOfMessage} />
          </StandOutImage>
        )}
      </LoginContainer>
    </PageContainer>
  );
}

export default LoginPage;
