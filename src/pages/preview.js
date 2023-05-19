import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import Container from "../components/atoms/Container";

const PreviewPage = () => {
  return (
    <Container>
      <h1>Loading preview…</h1>
    </Container>
  )
}

export default withPrismicPreviewResolver(PreviewPage)