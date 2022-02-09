import React from "react";
import styled from "styled-components";
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
function XthreeDom() {
  return (
    <PageContainer>
      <MainContainer>
        <SentMessageContainer>
          <x3d width="600px" height="600px">
            <scene>
              {/* <viewpoint
                position="-1.94639 1.79771 -2.89271"
                orientation="0.03886 0.99185 0.12133 3.75685"
              ></viewpoint> */}
              <viewpoint
                description="lateralview"
                def="lateralview"
                position="0 0 12"
              ></viewpoint>
              <shape>
                <appearance>
                  <material diffuseColor="0 0 1"></material>
                </appearance>
                <sphere></sphere>
              </shape>
            </scene>
          </x3d>
        </SentMessageContainer>
      </MainContainer>
    </PageContainer>
  );
}

export default XthreeDom;
