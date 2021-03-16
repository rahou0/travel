import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { TiLocationOutline } from "react-icons/ti";
import Button from "../../components/Button";

const CardPlace = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: flex;
  border-radius: 7px;
  justify-content: space-between;
  padding: 15px 30px;
  min-width: 170px;
  max-width: 170px;
  margin-top: 40px;
  margin-right: 50px;
  align-items: flex-start;
  min-height: 260px;
  flex-direction: column;
  background-color: ${({ v }) => (v ? "#fff" : "#0066ff")};
  &:hover {
    box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.2);
  }
`;
const CardTitle = styled.h5`
  color: ${({ v }) => (v ? "#0066ff" : "#fff")};
  letter-spacing: 0.7px;
  font-size: 16px;
  font-weight: 500px;
`;
const CardLocation = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: ${({ v }) => (v ? "#000" : "#8dbbff")};
  opacity: 0.8;
`;
const HrozantalDivider = styled.div`
  min-width: 100%;
  height: 2px;
  margin: 5px 0;
  background-color: #8dbbff;
  opacity: 0.6;
  border-radius: 50%;
`;
const UperCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const MiddleCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Card({ data, v }) {
  function handleClick(e) {
    window.location.href = `/place/${data.id}`;
  }
  return (
    <CardPlace v={v}>
      <UperCardContainer>
        <CardTitle v={v}>{data.title}</CardTitle>
        <Marginer direction="vertical" margin={5} />
        <HrozantalDivider />
      </UperCardContainer>
      <MiddleCardContainer>
        <TiLocationOutline
          style={{
            color: v ? "#000" : "#fff",
            width: 50,
            height: 50,
            opacity: 0.65,
          }}
        />
        <CardLocation v={v}>{data.address}</CardLocation>
      </MiddleCardContainer>
      <Button
        shadow={"0 2px 4px 0 rgba(0, 0, 0, 0.2)"}
        margin={"5px 3px"}
        textColor={v ? "fff" : "000"}
        radius={"8"}
        width={"100%"}
        padding={"11px 0"}
        color={v ? "0066ff" : "fff"}
        onClick={handleClick}
      >
        See Now
      </Button>
    </CardPlace>
  );
}

export default Card;
