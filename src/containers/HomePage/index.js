import React from "react";
import TopSection from "./TopSection";
import TrendingPage from "./TrendingPage";
import styled from "styled-components";
const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  background-color: #f1f4f8;
`;
function HomePage() {
  return (
    <PageContainer>
      <TopSection />
      <TrendingPage />
    </PageContainer>
  );
}

export default HomePage;
