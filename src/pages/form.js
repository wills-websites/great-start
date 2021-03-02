import React from "react"
import SEO from "../components/molecules/SEO"
import Container from "../components/atoms/Container"
import ContactForm from "../components/organisms/ContactForm"

const Form = () => (
  <>
    <SEO title="Contact Form" />
    <Container>
      <ContactForm />
    </Container>
  </>
)

export default Form
