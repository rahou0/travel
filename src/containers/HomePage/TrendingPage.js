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
const Data = [
  {
    id: 1,
    title: "Djemila",
    address: "Setif, Algeria",
  },
  {
    id: 2,
    title: "Prince Abdel Kader Mosque",
    address: "Constantine, Algeria",
  },
  {
    id: 3,
    title: "Fort Santa Cruz",
    address: "Oran, Algeria",
  },
  {
    id: 4,
    title: "Kasbah of Algiers",
    address: "Algiers, Algeria",
  },
  {
    id: 5,
    title: "Memorial du Martyr",
    address: "Algiers, Algeria",
  },
  {
    id: 6,
    title: "Timgad",
    address: "Batna, Algeria",
  },
];
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
          {Data.map((data, index) => {
            if(index%2===0)
            return <Card key={index} data={data}/>;
            else
            return <Card key={index} data={data} v={1}/>;
          })}
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
