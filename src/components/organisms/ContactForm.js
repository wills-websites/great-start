import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("* Name is Required."),
  email: Yup.string()
    .email("* Enter a Valid Email.")
    .required("* Email is Required."),
  subject: Yup.string(),
  colour: Yup.string().required("* Colour is Required."),
  message: Yup.string().required("* Message is Required."),
})

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function ContactForm() {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", colour: "", subject: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "contact-form",
              ...values,
            }),
          })
            .then(() => {
              alert(
                "Thanks! We have received your message and will get back to you ASAP."
              )
              setSubmitting(false)
            })
            .catch((error) => {
              alert(
                "Something went wrong! Could you please try again or email us directly."
              )
              setSubmitting(false)
            })
        }}
      >
        {({ isSubmitting }) => (
          <Form
            className="form"
            method="post"
            name="contact-form"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div className="fieldset">
              <label htmlFor="name" className="label">
                Name
              </label>
              <Field className="input" type="text" name="name" />
              <ErrorMessage
                className="errorMsg"
                name="name"
                component="small"
              />
            </div>
            <div className="fieldset">
              <label htmlFor="email" className="label">
                Email
              </label>
              <Field className="input" type="text" name="email" />
              <ErrorMessage
                className="errorMsg"
                name="email"
                component="small"
              />
            </div>

            <label htmlFor="colour" className="label">Colour</label>
            <div className="fieldset select">
              <Field as="select" name="colour">
                <option value="" disabled>Colour</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
              </Field>
              <ErrorMessage className="errorMsg" name="colour" component="small" />
            </div>

            <div className="fieldset">
              <label htmlFor="subject" className="label">
                Subject
              </label>
              <Field className="input" type="text" name="subject" />
              <ErrorMessage
                className="errorMsg"
                name="subject"
                component="small"
              />
            </div>
            <div className="fieldset">
              <label htmlFor="message" className="label">
                Message
              </label>
              <Field
                className="input-textarea"
                name="message"
                component="textarea"
                rows="3"
              />
              <ErrorMessage
                className="errorMsg"
                name="message"
                component="small"
              />
            </div>
            <div>
              <input
                name="submit"
                type="submit"
                disabled={isSubmitting}
                value="Send Message"
                className="button"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ContactForm
