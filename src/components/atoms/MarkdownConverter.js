import React, { Component } from "react"
import showdown from "showdown"

const converter = new showdown.Converter({ simpleLineBreaks: true })

class MarkdownConverter extends Component {
  render() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(this.props.content),
        }}
      />
    )
  }
}

export default MarkdownConverter
