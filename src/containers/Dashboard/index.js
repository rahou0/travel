import React from "react";
import styled from "styled-components";
import SideBar from "../../components/SideBar";
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  position: relative;
`;
const DashboardPageContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-start;
  background-color: #f1f4f8;
  text-align: start;
`;

function Dashboard() {
  return (
    <PageContainer>
      <DashboardPageContainer>
        <SideBar />
      </DashboardPageContainer>
    </PageContainer>
  );
}

export default Dashboard;
