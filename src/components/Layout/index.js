import PropTypes from "prop-types";
import React from "react";

import { motion, AnimatePresence } from 'framer-motion';
import Header from "../Header";
import Footer from "../Footer";
import tw from 'twin.macro' ;

const StyledLayout = tw.main`
    flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16
`;
const Container = tw.div`
    flex flex-col min-h-screen font-sans text-gray-900 
`;

function Layout({ children }) {
  return (
    <AnimatePresence exitBeforeEnter>

      <Container>

        <Header />

        <StyledLayout>
          <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
          {children}
          </motion.div>
        </StyledLayout>

        <Footer/>

      </Container>

    </AnimatePresence>
  );
}

Layout.propTypes = { 
  children: PropTypes.node.isRequired,
};

export default Layout;
