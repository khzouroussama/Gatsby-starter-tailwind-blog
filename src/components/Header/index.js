import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import * as Styled from './styles' ; 
import { motion } from 'framer-motion';


function Header() {
  const [open, setOpen] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const mainNavItems  = [
                          {
                            route: `/about`,
                            title: `About`,
                          },
                          {
                            route: `/contact`,
                            title: `Contact`,
                          },
                        ] ;

  return (
    <header className="bg-gray-100">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
            <h1 className="flex items-center text-blue-700 no-underline">
              <svg
                className="w-8 h-8 mr-2 fill-current"
                height="54"
                viewBox="0 0 54 54"
                width="54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
              </svg>
              <span className="text-xl font-bold tracking-tight">
                {site.siteMetadata.title}
              </span>
            </h1>
        </Link>


        <>
          <Styled.MainNav open={open}>
          {mainNavItems.map((link) => (
            <Styled.MainNavItem
              key={link.title}
              to={link.route}
              activeClassName="active"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
              {link.title}
              </motion.div>
            </Styled.MainNavItem>
          ))}
        </Styled.MainNav>
        <Styled.ToogleMainNav open={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </Styled.ToogleMainNav>
        </>

      </div>
    </header>
  );
}

export default Header;
