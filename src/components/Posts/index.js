import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';


import * as Styled from './styles';

const Posts = () => {
  const {allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "blog" }, published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMM DD, YYYY")
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 800 ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `);

  const posts = allMarkdownRemark.edges;

  return (
      <Styled.Posts>
        {posts.map((item) => {
          const {
            id,
            fields: { slug },
            frontmatter: { title, cover, date }  ,
            excerpt
          } = item.node;

          return (
            
            <Link to={slug} key={id}>
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.9 }}
            >
            <Styled.PostCard>
              <Styled.Image>  
                <Img 
                  sizes={{ ...cover.childImageSharp.fluid, aspectRatio: 1/1 }} 
                  alt={title} 
                />
              </Styled.Image>
              <Styled.Content>
                <div className="mb-2">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
                  <Styled.Excerpt>{excerpt}</Styled.Excerpt>
                </div>
                <div className="flex items-center">
                  <Img className="w-8 h-8 rounded-full mr-2" fluid={cover.childImageSharp.fluid} alt="oussama" />
                  <div className="text-sm">
                    <span className="text-bold text-gray-900 leading-none">oussama</span>
                    <p className="text-gray-500 text-xs">{date}</p>
                  </div>
                </div>
              </Styled.Content>
            </Styled.PostCard>
            </motion.div>
            </Link>

          );
        })}
      </Styled.Posts>
  );
};

/*

            <Styled.Post key={id}>
              <Link to={slug}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                  <Styled.Card>
                    <Styled.Image>
                    <Img sizes={{ ...cover.childImageSharp.fluid, aspectRatio: 21 / 9 }} alt={title} />
                    </Styled.Image>
                    <Styled.Content>
                      <Styled.Date>{date}</Styled.Date>
                      <Styled.Title>{title}</Styled.Title>
                      <Styled.Description>{excerpt}</Styled.Description>
                    </Styled.Content>
                    <Styled.Tags>
                      {tags.map((item) => (
                        <Styled.Tag key={item}>{item}</Styled.Tag>
                      ))}
                    </Styled.Tags>
                  </Styled.Card>
                </motion.div>
              </Link>
            </Styled.Post>
*/ 
export default Posts;
