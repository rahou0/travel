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
const MainContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
`;
const RegistreContainer = styled.div`
  padding: ${({ padding }) => (padding ? "0 2%" : "0 8%")};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    justify-content: center;
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
  width: 50%;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  @media (max-width: 992px) {
    width: 90%;
  }
`;
const SloganContainer = styled.div`
  width: 100%;
`;

const Text = styled.h1`
  font-size: ${({ size }) => (size ? size + "em" : "18px")};
  text-align: ${({ position }) => (position ? position : "start")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  width: 100%;
  color: ${({ color }) => (color ? "#" + color : "#000")};
`;
const CardRegistre = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: flex;
  border-radius: 7px;
  justify-content: space-between;
  padding: 15px 30px;
  width: 90%;
  margin-top: 40px;
  margin-right: 50px;
  align-items: center;
  min-height: 260px;
  flex-direction: column;
  background-color: ${({ color }) => (color ? "#" + color : "#fff")};
`;
const WarnignText = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
`;
const WarningContainer = styled.div`
  width: 100%;
  text-align: end;
  padding: 5px 0;
`;
const WarningContainerRegistre = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 12px;
  padding-bottom: 5px;
`;
function RegistrePage() {
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
  const [errors, setErrors] = useState({
    username: { value: false, msg: "" },
    password2: { value: false, msg: "" },
    email: { value: false, msg: "" },
    password: { value: false, msg: "" },
    request: { value: false, msg: "" },
  });
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
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
    if (password2 === "") {
      setErrors((prevState) => ({
        ...prevState,
        password2: { value: true, msg: "This Field is Empty" },
      }));
    } else if (password2 !== password) {
      setErrors((prevState) => ({
        ...prevState,
        password2: { value: true, msg: "Password dont match" },
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
    if (username === "") {
      setErrors((prevState) => ({
        ...prevState,
        username: { value: true, msg: "This Field is Empty" },
      }));
    } else {
      if (
        /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(
          username
        )
      )
        setErrors((prevState) => ({
          ...prevState,
          username: { value: true, msg: "Username Invalid!" },
        }));
    }
  }
  function handleClick(e) {
    CheckInputs();
    if (
      username.length > 6 &&
      password.length >= 8 &&
      email !== "" &&
      /.+@.+\.[A-Za-z]+$/.test(email) & (password === password2) &&
      /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(
        username
      )
    )
      axios
        .post(
          "http://192.168.1.3:4000/login",
          {
            email,
            password,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": true,
            },
          }
        )
        .then(function (response) {
          localStorage.setItem("token", response.data);
          window.location.href = `/dashboard`;
        })
        .catch(function (error) {
          setErrors((prevState) => ({
            ...prevState,
            request: { value: true, msg: error.response.data },
          }));
        });
    //window.location.href = `/dashboard`;
  }
  return (
    <PageContainer>
      <MainContainer>
        <RegistreContainer padding={isTablet}>
          <TextContainer>
            <CardRegistre>
              <SloganContainer>
                <Text weight={700} size={2.5}>
                  Join Our Community
                </Text>
              </SloganContainer>
              <Marginer direction="vertical" margin={15} />
              <TextFieldContainer>
                <label for="username">UserName</label>
                <Marginer direction="vertical" margin={10} />
                <input
                  type="text"
                  value={username}
                  placeholder="Example123"
                  onChange={(e) => {
                    setUserName(e.target.value);
                    setErrors((prevState) => ({
                      ...prevState,
                      username: { value: false, msg: "" },
                    }));
                  }}
                  id="username"
                ></input>
                <WarningContainer>
                  {errors.username.value && (
                    <WarnignText>{errors.username.msg}</WarnignText>
                  )}{" "}
                </WarningContainer>

                <label for="email">Email</label>
                <Marginer direction="vertical" margin={10} />
                <input
                  type="email"
                  value={email}
                  placeholder="example@me.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((prevState) => ({
                      ...prevState,
                      email: { value: false, msg: "" },
                    }));
                  }}
                  id="email"
                ></input>
                <WarningContainer>
                  {errors.email.value && (
                    <WarnignText>{errors.email.msg}</WarnignText>
                  )}{" "}
                </WarningContainer>
                <label for="password">Password</label>
                <Marginer direction="vertical" margin={10} />
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
                ></input>
                <WarningContainer>
                  {errors.password.value && (
                    <WarnignText>{errors.password.msg}</WarnignText>
                  )}{" "}
                </WarningContainer>
                <label for="password2">Repeat Password</label>
                <Marginer direction="vertical" margin={10} />
                <input
                  type="password"
                  value={password2}
                  placeholder="********"
                  onChange={(e) => {
                    setPassword2(e.target.value);
                    setErrors((prevState) => ({
                      ...prevState,
                      password2: { value: false, msg: "" },
                    }));
                  }}
                  id="password2"
                ></input>
                <WarningContainer>
                  {errors.password2.value && (
                    <WarnignText>{errors.password2.msg}</WarnignText>
                  )}{" "}
                </WarningContainer>
              </TextFieldContainer>
              <WarningContainerRegistre>
                {errors.request.value && (
                  <WarnignText>{errors.request.msg}</WarnignText>
                )}
              </WarningContainerRegistre>
              <Button
                onClick={handleClick}
                color={"0066FF"}
                shadow={"0 8px 16px 0 rgba(0, 0, 0, 0.2)"}
                width={"50%"}
                padding={"11px 0"}
                height={"55"}
                textSize={"22"}
              >
                Registre
              </Button>
              <Marginer direction="vertical" margin={10} />
              <Text position={"center"} size={1}>
                Already Have An Account?{" "}
                <Link
                  to="/login"
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
            </CardRegistre>
          </TextContainer>
          {!isTablet && (
            <StandOutImage>
              <img alt="contact us" src={ImageOfMessage} />
            </StandOutImage>
          )}
        </RegistreContainer>
      </MainContainer>
    </PageContainer>
  );
}

export default RegistrePage;
