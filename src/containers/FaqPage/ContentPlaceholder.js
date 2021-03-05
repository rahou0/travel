import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Placeholder = styled(motion.div)`
  padding: 10px 1%;
  width: 98%;
  padding-bottom: 20px;
`;
const Text = styled.a`
  font-size: 22px;
  font-weight: 500px;
  text-align: justify;
  text-justify: inter-word;
  color: #000;
`;
export const ContentPlaceholder = () => (
  <Placeholder
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
  >
    <Text>
      Algiers is the capital city in Algeria and has an estimated population of
      around 3,500,000. The city was founded by the Ottomans and is rife with
      history and beautiful architecture. The ancient Casbah is a winding urban
      maze, with streets flowing through the old town like streams. Also worth
      exploring is the Dar Hassan Pacha, which was once the city’s most decedent
      mansion. The interior of the house has been under renovation since 2005
      and is unfortunately closed to the public. The city of Algiers offers
      visitors from the west a stark and beautiful contrast and an intriguing
      glimpse into the past, present and future of Algeria.
    </Text>
  </Placeholder>
);
