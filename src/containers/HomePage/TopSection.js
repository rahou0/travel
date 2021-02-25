import React from "react";
import styled from "styled-components";
import ImageUser from "../../ressources/image.svg";
import SearchBar from "../../components/SearchBar";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";

const TopSectionContainer = styled.div`
  padding-top: 70px;
  width: 100%;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
`;
const UperContainer = styled.div`
  height: ${({ height }) => (height ? "150px" : "300px")};
  padding: ${({ padding }) => (padding ? "0 2%" : "0 15%")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0066ff;
  border-radius: ${({ radius }) => (radius ? "0px" : "25px")};
`;
const InsideUperContainer = styled.div`
  margin: ${({ margin }) => (margin ? "0 0" : "10px 20px")};
`;
const ImageOut = styled.div`
  height: 290px;
  width: 290px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 450px;
  max-height: 250px;
`;
const Title = styled.h1`
  font-size: ${({ font }) => (font ? font + "px" : "42px")};
  font-weight: 700;
  text-align: start;
  line-height: 1;
  color: #fff;
`;
const Slogan = styled.h3`
  font-size: ${({ font }) => (font ? font + "px" : "22px")};
  font-weight: 500;
  text-align: start;
  line-height: 1;
  color: #fff;
`;
const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ padding }) => (padding ? "0 1%" : "0 15%")};
`;
function TopSection() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  return (
    <TopSectionContainer>
      <InsideUperContainer margin={isMobile ? 1 : null}>
        <UperContainer
          radius={isMobile ? 1 : null}
          padding={isMobile ? 1 : null}
          height={isMobile ? 1 : null}
        >
          <TextContainer>
            <Title font={isMobile ? 23 : null}>
              Find All The Historical Places In Algeria
            </Title>
            <Slogan font={isMobile ? 15 : null}>
              We have more than 9,643 places
            </Slogan>
          </TextContainer>
          {!isMobile && (
            <ImageOut>
              <img src={ImageUser} alt="hello all" />
            </ImageOut>
          )}
        </UperContainer>
      </InsideUperContainer>
      <MiddleContainer padding={isMobile ? 1 : null}>
        <SearchBar margin={isMobile ? "-20px" : "-35px"} />
      </MiddleContainer>
    </TopSectionContainer>
  );
}

export default TopSection;
