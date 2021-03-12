import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Accordion from "../../components/Accordion";
import { Marginer } from "../../components/marginer";

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  background-color: #f1f4f8;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 80px 12%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
`;
const Title = styled.a`
  font-size: 60px;
  width: 100%;
  text-decoration: none;
  font-weight: 700;
  color: ${({ color }) => (color ? "#0066FF" : "#000")};
  font-size: ${({ size }) => (size ? "42px" : "60px")};
  justify-content: flex-start;
`;
const accordionIds = [0, 1, 2, 3];
const questions = ["Question 1", "Question 2", "Question 3", "Question 4"];
function FaqPage() {
  const [expanded, setExpanded] = useState(0);
  return (
    <PageContainer>
      <Container>
        <Title>
          Have a <Title color={1}>Question?</Title>
        </Title>
        <Title>Look here</Title>
        <Marginer direction="verticale" margin={30}/>
        {accordionIds.map((i) => (
          <Accordion
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={questions[i]}
          />
        ))}
      </Container>
    </PageContainer>
  );
}

export default FaqPage;
