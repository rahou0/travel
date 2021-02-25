import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Title = styled(motion.h2)`
  line-height: 0;
  font-weight: ${({ weight }) => (weight ? weight : "700")};
  color: ${({ color }) => (color ? "#" + color : "#fdcd73")};
  font-size: ${({ font }) => (font ? font + "px" : "30px")};
  padding-right: 20px;
`;
function PageTitle(props) {
  const { color, font, weight, init, trans } = props;
  return (
    <Title
      initial={init}
      animate={{ y: 0, opacity: 1 }}
      transition={trans}
      color={color}
      weight={weight}
      font={font}
    >
      {props.children}
    </Title>
  );
}

export default PageTitle;
