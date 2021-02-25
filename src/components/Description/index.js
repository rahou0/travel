import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DescriptionText = styled(motion.a)`
  color: ${({ color }) => (color ? "#" + color : "#fff")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  font-size: ${({ font }) => (font ? font + "px" : "16px")};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`;
function Description(props) {
  const { color, font, weight, opacity, init, trans } = props;
  return (
    <DescriptionText
      initial={init}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={trans}
      opacity={opacity}
      font={font}
      weight={weight}
      color={color}
    >
      {props.children}
    </DescriptionText>
  );
}

export default Description;
