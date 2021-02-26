import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Marginer } from "../../components/marginer";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
const PageContainer = styled.div`
  width: 100vw;
  min-height: 130vh;
  max-width: 100%;
  background-color: #f1f4f8;
`;

const TopContainer = styled.div`
  margin: ${({ margin }) => (margin ? "0 0" : "10px 20px")};
  padding-top: 80px;
`;
const MainContainer = styled.div`
  padding: ${({ padding }) => (padding ? "0 2%" : "0 15%")};
  display: flex;
  align-items: start;
  flex-direction: column;

  justify-content: flex-start;
`;
const UpperContainer = styled.div`
  display: flex;
  background-color: #0066ff;
  border-radius: 10px;
  padding: ${({ padding }) => (padding ? "0 2%" : "0 15%")};
  justify-content: center;
  align-items: center;
  height: ${({ height }) => (height ? "80px" : "180px")};
`;
const UperTrendingContainer = styled.div`
  padding-top: 40px;
  justify-content: flex-start;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 550;
  text-align: start;
  line-height: 1.2;
  color: #000;
`;
const HoriLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: grey;
  border-radius: 50%;
`;
const CardContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 10px 30px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const WarningText = styled.h3`
  color: grey;
  text-align: center;
`;
function SearchPage() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  let { id, selector } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const isPlacesEmpty = !places || (places && places.length === 0);
  const fetchPlaces = async () => {
    setLoading(true);
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .catch((err) => {
        console.log("Error: ", err);
      });
    await wait(3000);
    if (response) {
      setPlaces(response.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchPlaces();
  }, []);
  const wait = (num) => new Promise((rs) => setTimeout(rs, num));
  return (
    <PageContainer>
      <TopContainer margin={isMobile ? 1 : null}>
        <UpperContainer
          padding={isMobile ? 1 : null}
          height={isMobile ? 1 : null}
        >
          <SearchBar id={id} selector={selector} />
        </UpperContainer>
      </TopContainer>

      <MainContainer padding={isMobile ? 1 : null}>
        <UperTrendingContainer padding={isMobile ? 1 : null}>
          <Title>Places</Title>
          <Marginer direction="vertical" margin={10} />
        </UperTrendingContainer>
        <HoriLine />
        <Marginer direction="vertical" margin={20} />
        {isPlacesEmpty && !isLoading && (
          <WarningText>No place at the moment</WarningText>
        )}
        {isLoading && <WarningText>Loading ...</WarningText>}
        {!isPlacesEmpty && !isLoading && (
          <CardContainer>
            <Card
              placeId={4}
              title={"Kasbah of Algiers"}
              titleColor={"fff"}
              cardColor={"0066ff"}
              buttonColor={"fff"}
              textButtonColor={"000"}
              iconcolor={"#fff"}
              city={"Algiers, Algeria"}
            />
            <Card
              placeId={5}
              title={"Memorial du Martyr"}
              titleColor={"0066ff"}
              cardColor={"fff"}
              buttonColor={"0066ff"}
              textButtonColor={"fff"}
              iconcolor={"#000"}
              cityColor={"#000"}
              city={"Algiers, Algeria"}
            />
            <Card
              placeId={6}
              title={"Palais of Rais"}
              titleColor={"fff"}
              cardColor={"0066ff"}
              buttonColor={"fff"}
              textButtonColor={"000"}
              iconcolor={"#fff"}
              city={"Algiers, Algeria"}
            />
          </CardContainer>
        )}
      </MainContainer>
    </PageContainer>
  );
}

export default SearchPage;
