import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

const ButtonWrapper = styled.button`
  margin: 0;
  outline: none;
  align-items: center;
  justify-content: center;
  border: 0;
  bottom: 20px;
  right: 20px;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  position: fixed;
  z-index: 1000;
  background-color: #59ff52;
  cursor: pointer;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.9;
  }
`;
const ArrowUp = styled(IoIosArrowUp)`
  height: 30px;
  width: 30px;
  color: white;
`;
export default function ButtonGoUp() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) setShowScroll(true);
    else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <ButtonWrapper
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    >
      <ArrowUp />
    </ButtonWrapper>
  );
}
