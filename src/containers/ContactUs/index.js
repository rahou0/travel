import styled from "styled-components";
import React, { useState } from "react";
import ImageOfContact from "../../ressources/contactus.svg";
import { Marginer } from "../../components/marginer";
import Button from "../../components/Button";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  background-color: #f1f4f8;
`;
const ComportmentContainer = styled.div`
  padding: ${({ padding }) => (padding ? "0 5%" : "0 10%")};
  background-color: #f1f4f8;
  padding-top: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StandOutImage = styled.div`
  height: 40%;
  width: 40%;
  img {
    width: 100%;
    height: 100%;
  }
`;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: ${({ width }) => (width ? "90%" : "40%")};
`;
const ContactUsText = styled.h1`
  background-color: #f1f4f8;
  font-size: ${({ size }) => (size ? size + "em" : "18px")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  color: ${({ color }) => (color ? "#" + color : "#000")};
`;
const TextFieldContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  input {
    width: 100%;
    background-color: #fff;
    font-size: 16px;
    height: 45px;
    border: none;
    color: #000;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding-left: 15px;
  }
  textarea {
    width: 100%;
    background-color: #fff;
    font-size: 16px;
    height: 200px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    color: #000;
    padding: 15px 15px;
  }
  input:focus {
    outline: none !important;
    border-color: #0066ff;
    box-shadow: 0 0 10px #719ece;
  }
  textarea:focus {
    outline: none !important;
    border-color: #0066ff;
    box-shadow: 0 0 10px #719ece;
  }
  label {
    font-size: 16px;
    font-weight: 500;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
const WarnignText = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
`;
const WarningContainer = styled.div`
  width: 100%;
  text-align: end;
`;
function ContactUs() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
  const [errors, setErrors] = useState({
    email: { value: false, msg: "" },
    msg: { value: false, msg: "" },
    subject: { value: false, msg: "" },
    name: { value: false, msg: "" },
  });
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  function CheckInputs() {
    if (name === "") {
      setErrors((prevState) => ({
        ...prevState,
        name: { value: true, msg: "This Field is Empty" },
      }));
    }
    if (subject === "") {
      setErrors((prevState) => ({
        ...prevState,
        subject: { value: true, msg: "This Field is Empty" },
      }));
    }
    if (msg === "") {
      setErrors((prevState) => ({
        ...prevState,
        msg: { value: true, msg: "This Field is Empty" },
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
    if (
      msg !== "" &&
      name !== "" &&
      email !== "" &&
      subject !== "" &&
      /.+@.+\.[A-Za-z]+$/.test(email)
    )
      window.location.href = `/contact/sent`;
  }
  return (
    <PageContainer>
      <ComportmentContainer padding={isMobile}>
        <ContactContainer width={isTablet}>
          <ContactUsText weight={isMobile ? 600 : 700} size={isMobile ? 3 : 4}>
            Let's talk
          </ContactUsText>
          <TextFieldContainer>
            <label for="fullname">Full Name</label>
            <Marginer direction="vertical" margin={3} />
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prevState) => ({
                  ...prevState,
                  name: { value: false, msg: "" },
                }));
              }}
              id="fullname"
            ></input>
            <WarningContainer>
              {errors.name.value && (
                <WarnignText>{errors.name.msg}</WarnignText>
              )}{" "}
            </WarningContainer>
            <label for="subject">Subject</label>
            <Marginer direction="vertical" margin={3} />
            <input
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                setErrors((prevState) => ({
                  ...prevState,
                  subject: { value: false, msg: "" },
                }));
              }}
              id="subject"
            ></input>
            <WarningContainer>
              {errors.subject.value && (
                <WarnignText>{errors.subject.msg}</WarnignText>
              )}{" "}
            </WarningContainer>
            <Marginer direction="vertical" margin={10} />
            <label for="email">Email</label>
            <Marginer direction="vertical" margin={7} />
            <input
              value={email}
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
            <Marginer direction="vertical" margin={10} />
            <label for="message">Message</label>
            <Marginer direction="vertical" margin={10} />
            <textarea
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
                setErrors((prevState) => ({
                  ...prevState,
                  msg: { value: false, msg: "" },
                }));
              }}
              id="message"
              placeholder="type something..."
            ></textarea>
            <WarningContainer>
              {errors.msg.value && <WarnignText>{errors.msg.msg}</WarnignText>}{" "}
            </WarningContainer>
            <Marginer direction="vertical" margin={20} />
            <ButtonContainer>
              <Button
                onClick={handleClick}
                padding={"10px 10px"}
                width={"150px"}
                color={"0066FF"}
                shadow={"0 8px 16px 0 rgba(0, 0, 0, 0.2)"}
              >
                Send Message
              </Button>
            </ButtonContainer>
          </TextFieldContainer>
        </ContactContainer>
        {!isTablet && (
          <StandOutImage>
            <img alt="contact us" src={ImageOfContact} />
          </StandOutImage>
        )}
      </ComportmentContainer>
    </PageContainer>
  );
}

export default ContactUs;
