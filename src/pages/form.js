import React from "react"
import Seo from "../components/molecules/Seo"
import Container from "../components/atoms/Container"
import ContactForm from "../components/organisms/ContactForm"

const Form = () => (
  <>
    <Seo title="Contact Form" />
    <Container>
      <ContactForm />
    </Container>
  </>
)

export default Form
