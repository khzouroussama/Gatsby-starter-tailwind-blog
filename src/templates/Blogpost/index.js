import React from "react"
import Layout from "../../components/Layout"
import PropTypes from "prop-types";
import { graphql , Link } from "gatsby"
require(`katex/dist/katex.min.css`)

export default function BlogPost({ data , pageContext }) {
  const post = data.markdownRemark  ;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <div>
        <h1 className="text-2xl text-blue-500 mb-4">{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <div className="bg-gray-200 border-gray-100 rounded-lg text-xl p-4 mt-10">
          <span>
              {previous && (
                <Link to={previous.fields.slug} rel="previous">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </span>
            <span>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </span>
          </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

BlogPost.propTypes = {
    data: PropTypes.object.isRequired ,
    pageContext : PropTypes.object.isRequired 
};