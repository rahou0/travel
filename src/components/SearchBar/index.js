import React, { useState } from "react";
import { TiLocationOutline } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";
const SearchContainer = styled.div`
  display: flex;
  border-radius: 7px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: #fff;
  width: 100%;
  margin-top: ${({ margin }) => (margin ? margin : "0")};
  height: ${({ height }) => (height ? "40px" : "70px")};
`;
const LeftSearchContainer = styled.div`
  width: 50%;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: ${({ font }) => (font ? font + "px" : "16px")};
  }
`;
const RightSearchContainer = styled.div`
  width: 35%;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    height: 100%;
    outline: none;
    font-weight: 500;
    font-size: ${({ font }) => (font ? font + "px" : "16px")};
  }
  select {
    width: 100%;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: ${({ font }) => (font ? font + "px" : "16px")};

    option {
      font-weight: 500;
    }
  }
`;
const SearchIcon = styled(FaSearch)`
  color: white;
  height: ${({ size }) => size+"px"};
  width: ${({ size }) => size+"px"};
`;
const SeparatorSearchContainer = styled.div`
  min-width: 3px;
  background-color: #e5e8eb;
`;
const SearchToggle = styled.div`
  height: 94%;
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #59ff52;
  border-radius: 5px;
  margin: 2px 2px;
  cursor: pointer;
`;
function SearchBar(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const { margin, id, selector } = props;
  const [query, setQuery] = useState(id || "");
  const [option, setOption] = useState(selector || "name");
  function handleClick(e) {
    if (query !== "") window.location.href = `/search/${option}=${query}`;
    else window.location.href = `/search/${option}=all`;
  }
  function handleQueryOtpion(e) {
    console.log(e.target.value);
    setOption(e.target.value);
  }
  return (
    <SearchContainer margin={margin} height={isMobile ? 1 : null}>
      <LeftSearchContainer font={isMobile ? 11 : null}>
        <TiLocationOutline
          style={{
            color: "#000",
            width: 30,
            height: 30,
            paddingRight: "10px",
          }}
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder={`Enter Place ${option}`}
        />
      </LeftSearchContainer>
      <SeparatorSearchContainer />
      <RightSearchContainer font={isMobile ? 11 : null}>
        <select value={option} name="search" onChange={handleQueryOtpion}>
          <option value="name">Search by Name</option>
          <option value="city">Search by City</option>
        </select>
      </RightSearchContainer>
      <SearchToggle>
        <SearchIcon size={isMobile?15:25} />
      </SearchToggle>
    </SearchContainer>
  );
}

export default SearchBar;
