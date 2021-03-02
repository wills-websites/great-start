import React, { Component } from "react"
import { Link } from "gatsby"
import Image from "../atoms/Image"
import moment from "moment"
import { convertToSlug } from "../../utils/helpers"

class PostLink extends Component {
  render() {
    return (
      <li>
        <Link to={"/post" + convertToSlug(this.props.post.frontmatter.title)}>
          <Image
            imgName={this.props.post.frontmatter.thumbnail.replace(
              "/images/uploads/",
              ""
            )}
          />
          <p>
            {this.props.post.frontmatter.title} -{" "}
            {moment(this.props.post.frontmatter.date).format("MMMM Do YYYY")}
          </p>
        </Link>
      </li>
    )
  }
}

export default PostLink
