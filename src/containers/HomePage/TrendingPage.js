import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
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
      .get("http://134.122.68.39/tranding")
      .catch((err) => {
        console.log("Error: ", err);
      });
    if (response) {
      console.log(response.data);
      setTrandingPlaces(response.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchTrendingPlaces();
  }, []);
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
      {isLoading && <Loading />}
      {!isTrandingPlacesEmpy && !isLoading && (
        <CardContainer padding={isMobile ? 1 : null}>
          {trandingPlaces.map((data, index) => {
            console.log(data);
            if (index % 2 === 0) return <Card key={index} data={data} />;
            else return <Card key={index} data={data} v={1} />;
          })}
        </CardContainer>
      )}
    </TrandingContainer>
  );
}

export default TrendingPage;
