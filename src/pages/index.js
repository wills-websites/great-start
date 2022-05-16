import React from "react";
import Seo from "../components/molecules/Seo";
import Gallery from "../components/organisms/Gallery";
import Container from "../components/atoms/Container";
import AnimatedThing from "../components/molecules/AnimatedThing";
import GsapExample from "../components/organisms/GsapExample";
import Cross from '../assets/svg/cross.inline.svg';
import Hamburger from '../assets/svg/hamburger.inline.svg';
import Arrow from '../assets/svg/arrow.inline.svg';
import styled from "styled-components";
import AccordionGroup from "../components/atoms/AccordionGroup";
import Accordion from "../components/atoms/Accordion";

const images = [
  "/images/uploads/tea-gardens-hotel.jpg",
  "/images/uploads/redfern.jpg",
  "/images/uploads/newtown-public-school.jpg",
  "/images/uploads/kpaz.jpg",
  "/images/uploads/fish.jpg",
  "/images/uploads/fighterworld.jpg",
  "/images/uploads/entrance-pool.jpg",
  "/images/uploads/dinosaur.jpg",
];

const Holder = styled.div`
  svg {
    width: 4rem;
    height: auto;
    margin-right: 2rem;
  }
`;

const IndexPage = () => (
  <Holder>
    <Seo title="Home" keywords={[ `gatsby`, `application`, `react` ]}/>
    <Container>
      <h1>Home (We are using Gatsby V3)</h1>
      <h2>A gallery</h2>
      <Gallery images={images}/>
      <h2>An animation component example</h2>
      <AnimatedThing/>
      <h2>An accordion example</h2>
      <AccordionGroup>
        <Accordion
          title={<p>Q: Will this accordion work?</p>}>
          <p>Who knows!?</p>
        </Accordion>
        <Accordion
          scrollTo={false}
          title={<p>Q: Will this one work as well?</p>}>
          <p>Absolutely no idea.</p>
        </Accordion>
      </AccordionGroup>
      <h2>An animate on scroll example</h2>
      <GsapExample/>
      <h2>Some inline SVGs</h2>
      <Cross/><Hamburger/><Arrow/>
    </Container>
  </Holder>
);

export default IndexPage;
