import React from "react"
import SEO from "../components/molecules/SEO"
import PostList from "../components/organisms/PostList"
import Gallery from "../components/organisms/Gallery"
import Container from "../components/atoms/Container"
import AnimatedThing from "../components/molecules/AnimatedThing"
import GsapExample from "../components/organisms/GsapExample"

const images = [
  "/images/uploads/tea-gardens-hotel.jpg",
  "/images/uploads/redfern.jpg",
  "/images/uploads/newtown-public-school.jpg",
  "/images/uploads/kpaz.jpg",
  "/images/uploads/fish.jpg",
  "/images/uploads/fighterworld.jpg",
  "/images/uploads/entrance-pool.jpg",
  "/images/uploads/dinosaur.jpg",
]

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <h1>Home (We are using Gatsby V3)</h1>
      <h2>A gallery</h2>
      <Gallery images={images} />
      <h2>An animation component example</h2>
      <AnimatedThing />
      <PostList />
      <h2>An animate on scroll example</h2>
      <GsapExample />
    </Container>
  </>
)

export default IndexPage
