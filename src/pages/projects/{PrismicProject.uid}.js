import React from "react"
import styled from 'styled-components'
import {graphql} from "gatsby"
import Container from "../../components/atoms/Container";
import {PrismicRichText, SliceZone} from "@prismicio/react"
import SliceImage from "../../components/organisms/slices/SliceImage";

const Holder = styled.div`
`;

export default function ProjectPage(props) {
  const {title, text, body} = props.data.prismicProject.data;
  return (
    <Container>
      <Holder>
        <h1>{title.text}</h1>
        <PrismicRichText field={text.richText} />
        <SliceZone
          slices={body}
          components={{
            image: SliceImage,
          }}
        />
      </Holder>
    </Container>
  )
}

export const query = graphql`
    query($id: String) {
        prismicProject(id: { eq: $id }) {
            data {
                title {
                    text
                }
                text {
                    richText
                }
                body {
                    ... on PrismicProjectDataBodyImage { ...SliceImageFragment }
                }
            }
        }
    }
`