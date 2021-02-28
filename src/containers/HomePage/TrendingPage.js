import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
const TrandingContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: #f1f4f8;
`;
const UperTrendingContainer = styled.div`
  padding: ${({ padding }) => (padding ? "0 1%" : "0 15%")};
  padding-top: 40px;
  margin: 10px 20px;
  justify-content: flex-start;
`;
const CardContainer = styled.div`
  display: flex;
  padding: ${({ padding }) => (padding ? "0 10%" : "0 15%")};
  margin: 10px 20px;
  justify-content: space-between;
  padding-top: 15px;
  flex-wrap: wrap;
  align-items: center;
`;

const TitleSecond = styled.h1`
  font-size: ${({ font }) => (font ? font + "px" : "42px")};
  font-weight: 600;
  text-align: start;
  line-height: 1.2;
  color: #000;
`;
const LoadingContainer = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: center;
`;
const ButtonWrapper = styled.button`
  border: none;
  margin: 3px 3px;
  outline: none;
  color: #fff;
  width: ${({ width }) => (width ? width + "px" : "200px")};
  padding: 13px 0px;
  font-size: 17px;
  font-weight: 500;
  align-items: center;
  border-radius: 8px;
  background-color: #0066ff;
  cursor: pointer;
`;
const WarningText = styled.h3`
  color: grey;
  text-align: center;
`;
function TrendingPage() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const [isLoading, setLoading] = useState(false);
  const [trandingPlaces, setTrandingPlaces] = useState([]);
  const isTrandingPlacesEmpy =
    !trandingPlaces || (trandingPlaces && trandingPlaces.length === 0);
  const fetchTrendingPlaces = async () => {
    setLoading(true);
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .catch((err) => {
        console.log("Error: ", err);
      });
    await wait(3000);
    if (response) {
      setTrandingPlaces(response.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchTrendingPlaces();
  }, []);
  const wait = (num) => new Promise((rs) => setTimeout(rs, num));
  return (
    <TrandingContainer>
      <UperTrendingContainer padding={isMobile ? 1 : null}>
        <TitleSecond font={isMobile ? 29 : null}>
          Current Trending Places
        </TitleSecond>
      </UperTrendingContainer>
      {isTrandingPlacesEmpy && !isLoading && (
        <WarningText>No place at the moment</WarningText>
      )}
      {isLoading && <WarningText>Loading ...</WarningText>}
      {!isTrandingPlacesEmpy && !isLoading && (
        <CardContainer padding={isMobile ? 1 : null}>
          <Card
            placeId={1}
            title={"Djemila"}
            titleColor={"fff"}
            cardColor={"0066ff"}
            buttonColor={"fff"}
            textButtonColor={"000"}
            iconcolor={"#fff"}
            city={"Setif, Algeria"}
          />
          <Card
            placeId={2}
            title={"Prince Abdel Kader Mosque"}
            titleColor={"0066ff"}
            cardColor={"fff"}
            buttonColor={"0066ff"}
            textButtonColor={"fff"}
            iconcolor={"#000"}
            cityColor={"#000"}
            city={"Constantine, Algeria"}
          />
          <Card
            placeId={3}
            title={"Fort Santa Cruz"}
            titleColor={"fff"}
            cardColor={"0066ff"}
            buttonColor={"fff"}
            textButtonColor={"000"}
            iconcolor={"#fff"}
            city={"Oran, Algeria"}
          />
          <Card
            placeId={4}
            title={"Kasbah of Algiers"}
            titleColor={"0066ff"}
            cardColor={"fff"}
            buttonColor={"0066ff"}
            textButtonColor={"fff"}
            iconcolor={"#000"}
            cityColor={"#000"}
            city={"Algiers, Algeria"}
          />
          <Card
            placeId={5}
            title={"Memorial du Martyr"}
            titleColor={"fff"}
            cardColor={"0066ff"}
            buttonColor={"fff"}
            textButtonColor={"000"}
            iconcolor={"#fff"}
            city={"Algiers, Algeria"}
          />
          <Card
            placeId={6}
            title={"Timgad"}
            titleColor={"0066ff"}
            cardColor={"fff"}
            buttonColor={"0066ff"}
            textButtonColor={"fff"}
            iconcolor={"#000"}
            cityColor={"#000"}
            city={"Batna, Algeria"}
          />
        </CardContainer>
      )}

      {!isTrandingPlacesEmpy && !isLoading && (
        <LoadingContainer>
          <ButtonWrapper width={isMobile ? 150 : null}>See More</ButtonWrapper>
        </LoadingContainer>
      )}
    </TrandingContainer>
  );
}

export default TrendingPage;
