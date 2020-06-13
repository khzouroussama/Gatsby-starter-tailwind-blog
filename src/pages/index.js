import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Posts from "../components/Posts"

function IndexPage( ) {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section >
        <h2 className="text-center mb-4 text-blue-800 font-bold">Blogs</h2>
        <Posts/>
      </section>
    </Layout>
  );
}

export default IndexPage;
