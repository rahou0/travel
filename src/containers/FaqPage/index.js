import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Accordion from "../../components/Accordion";

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
  padding: 150px 150px;
  min-height: 100%;
  justify-content: center;
  align-items: center;
`;
const accordionIds = [0, 1, 2, 3];
const questions = ["Question 1", "Question 2", "Question 3", "Question 4"];
function FaqPage() {
  const [expanded, setExpanded] = useState(0);
  return (
    <PageContainer>
      <Container>
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
