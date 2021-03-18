import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
const LoadingContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DotsContainer = styled(motion.div)`
  width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: space-around;
`;
const Dots = styled(motion.span)`
  display: block;
  width: 1rem;
  height: 1rem;
  background-color: #0066ff;
  border-radius: 50%;
`;

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};
const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};
function Loading() {
  return (
    <LoadingContainer>
      <DotsContainer
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <Dots
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <Dots
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <Dots
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </DotsContainer>
    </LoadingContainer>
  );
}

export default Loading;
