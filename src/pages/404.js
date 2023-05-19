import * as React from 'react'
import {withPrismicUnpublishedPreview} from 'gatsby-plugin-prismic-previews'
import Container from "../components/atoms/Container";
import Seo from "../components/molecules/Seo";

const NotFoundPage = () => {
  return (
    <>
      <Seo title="404: Not found" />
      <Container>
        <h1>Not found</h1>
      </Container>
    </>
  )
}

export default withPrismicUnpublishedPreview(NotFoundPage)