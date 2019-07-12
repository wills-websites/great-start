import React from "react";
import Layout from "../components/organisms/Layout";
import SEO from "../components/molecules/SEO";
import PostList from '../components/organisms/PostList';
import Gallery from '../components/organisms/Gallery';

const images = [
  '/images/uploads/tea-gardens-hotel.jpg',
  '/images/uploads/redfern.jpg',
  '/images/uploads/newtown-public-school.jpg',
  '/images/uploads/kpaz.jpg',
  '/images/uploads/fish.jpg',
  '/images/uploads/fighterworld.jpg',
  '/images/uploads/entrance-pool.jpg',
  '/images/uploads/dinosaur.jpg',
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Home</h1>
    <p>A gallery:</p>
    <Gallery images={images}/>
    <PostList/>
  </Layout>
);

export default IndexPage;
