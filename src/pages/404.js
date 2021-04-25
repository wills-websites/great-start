import React from "react"
import Seo from "../components/molecules/Seo"
import Container from "../components/atoms/Container"

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </>
)

export default NotFoundPage
