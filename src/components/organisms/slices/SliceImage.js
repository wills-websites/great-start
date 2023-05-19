import React from "react";
import PropTypes from "prop-types";
import {GatsbyImage} from "gatsby-plugin-image";
import Container from "../../atoms/Container";
import styled from "styled-components";
import {graphql} from "gatsby";

const Holder = styled.div`
`;

const SliceImage = ({slice}) => {
  const image = slice.primary.image.gatsbyImageData;
  const alt = slice.primary.image.alt;
  return (
    <Holder>
      <Container>
        <GatsbyImage alt={alt || ''} image={image} />
      </Container>
    </Holder>
  );
};

SliceImage.propTypes = {
  slice: PropTypes.object.isRequired,
};

export default SliceImage;

export const query = graphql`
    fragment SliceImageFragment on PrismicProjectDataBodyImage {
        id
        slice_type
        primary {
            image {
                gatsbyImageData(placeholder: NONE)
                alt
            }
        }
    }
`;

