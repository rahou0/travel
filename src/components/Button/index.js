import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const ButtonWrapper = styled(motion.div)`
  padding: ${({ padding }) => (padding ? padding : "")};
  color: ${({ textColor }) => (textColor ? "#" + textColor : "#fff")};
  border-radius: ${({ radius }) => (radius ? radius + "px" : "4px")};
  text-align: center;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: ${({ font }) => (font ? font + "px" : "17px")};
  font-weight: ${({ weight }) => (weight ? weight : "500")};
  background-color: ${({ color }) => (color ? "#" + color : "#59ff52")};
  width: ${({ width }) => (width ? width : "100px")};

  box-shadow: ${({ shadow }) => (shadow ? shadow : "")};
  margin: ${({ margin }) => (margin ? margin : "px")};
  &:focus {
    outline: none;
  }
  &:hover {
    filter: contrast(0.6);
  }
`;
function Button(props) {
  const {
    width,
    padding,
    font,
    weight,
    radius,
    margin,
    init,
    shadow,
    onClick,
    color,
    trans,
    textColor,
  } = props;
  return (
    <ButtonWrapper
      onClick={onClick}
      padding={padding}
      width={width}
      weight={weight}
      shadow={shadow}
      font={font}
      margin={margin}
      textColor={textColor}
      radius={radius}
      color={color}
      initial={init}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={trans}
    >
      {props.children}
    </ButtonWrapper>
  );
}

export default Button;
