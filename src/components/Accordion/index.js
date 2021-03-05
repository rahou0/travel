import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentPlaceholder } from "../../containers/FaqPage/ContentPlaceholder";
import styled from "styled-components";
const Header = styled(motion.header)`
  display: flex;
  background: #0055ff;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  width: 100%;
  height: 70px;
  align-items: center;
  padding-left: 50px;
  margin-bottom: 10px;
`;
const Title = styled.h6`
  font-size: 20px;
  font-weight: 600;
`;
const Section = styled(motion.section)`
  overflow: hidden;
`;
const Accordion = ({ i, expanded, setExpanded, title }) => {
  const isOpen = i === expanded;
  return (
    <>
      <Header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#59FF52" : "#0066FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <Title> {title}</Title>
      </Header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <Section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder />
          </Section>
        )}
      </AnimatePresence>
    </>
  );
};
export default Accordion;
