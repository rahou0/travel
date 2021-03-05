import styled from "styled-components";
import React from "react";
import ImageOfMessage from "../../ressources/messageSent.svg";
import { Marginer } from "../../components/marginer";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  background-color: #f1f4f8;
`;
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
const SentMessageContainer = styled.div`
  padding: 0px 210px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StandOutImage = styled.div`
  height: 400px;
  width: 400px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
const Text = styled.h1`
  font-size: ${({ size }) => (size ? size + "em" : "18px")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  width: 400px;
  color: ${({ color }) => (color ? "#" + color : "#000")};
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
function SentMessagePage() {
  return (
    <PageContainer>
      <MainContainer>
        <SentMessageContainer>
          <TextContainer>
            <Text weight={700} size={3.5}>
              Message Sent
            </Text>
            <Marginer direction="vertical" margin={10} />
            <Text size={1.3}>your message was successfully sent.</Text>
            <Marginer direction="vertical" margin={30} />
            <Marginer direction="vertical" margin={20} />
            <ButtonContainer>
              <Link style={{ textDecoration: "none" }} to="/">
                <Button
                  color={"0066FF"}
                  shadow={"0 4px 8px 0 rgba(0, 0, 0, 0.2)"}
                  padding={"10px 10px"}
                  width={"200"}
                >
                  Back to Home Page
                </Button>
              </Link>
            </ButtonContainer>
          </TextContainer>
          <StandOutImage>
            <img alt="contact us" src={ImageOfMessage} />
          </StandOutImage>
        </SentMessageContainer>
      </MainContainer>
    </PageContainer>
  );
}

export default SentMessagePage;
