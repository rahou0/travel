import React from "react";
import styled from "styled-components";
import SideBar from "../../components/SideBar";
import { useParams } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import AccountPage from "./AccountPage";

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  min-height: 100%;
  max-width: 100%;
  position: relative;
`;
const DashboardPageContainer = styled.div`
  display: flex;
  min-height: 100%;
  align-items: flex-start;
  background-color: #f1f4f8;
  text-align: start;
`;

function Dashboard() {
  let { page } = useParams();
  return (
    <PageContainer>
      <DashboardPageContainer>
        <SideBar />
        {page === "profile" && <ProfilePage />}
        {page === "account" && <AccountPage />}
      </DashboardPageContainer>
    </PageContainer>
  );
}

export default Dashboard;
