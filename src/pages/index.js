import React from "react";
import Layout from "../components/organisms/Layout";
import SEO from "../components/molecules/SEO";
import PostList from '../components/organisms/PostList';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Index</h1>
    <PostList/>
  </Layout>
);

export default IndexPage;
