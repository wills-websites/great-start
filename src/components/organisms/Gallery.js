import React, { Component } from "react"
import classNames from "classnames"
import Image from "../atoms/Image"
import styled from "styled-components"

const Holder = styled.section`
  width: 100%;
  max-width: 40rem;
  position: relative;
  cursor: pointer;
`

const Buttons = styled.nav`
  button {
    padding: 0;
    margin: 0;
    background: transparent;
    border: 1px solid white;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background: white;
    }
    &.prev,
    &.next {
      position: absolute;
      z-index: 10;
      top: 50%;
      transform: translateY(-50%);
    }
    &.prev {
      left: 0.7rem;
    }
    &.next {
      right: 0.7rem;
    }
  }
`

const ImageHolder = styled.div`
  display: none;
  width: 100%;
  &.active {
    display: block;
  }
`

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
    }
  }

  moveNext = () => {
    if (this.state.activeIndex === this.props.images.length - 1) {
      this.setState({
        activeIndex: 0,
      })
    } else {
      this.setState({
        activeIndex: this.state.activeIndex + 1,
      })
    }
  }

  movePrev = () => {
    if (this.state.activeIndex === 0) {
      this.setState({
        activeIndex: this.props.images.length - 1,
      })
    } else {
      this.setState({
        activeIndex: this.state.activeIndex - 1,
      })
    }
  }

  render() {
    if (this.props.images.length > 0) {
      return (
        <Holder>
          <Buttons>
            <button
              aria-label="Previous"
              className="prev"
              type="button"
              onClick={this.movePrev}
            />
            <button
              aria-label="Next"
              className="next"
              type="button"
              onClick={this.moveNext}
            />
          </Buttons>
          {this.props.images.map((image, i) => {
            let classes = classNames({ active: this.state.activeIndex === i })
            return (
              <ImageHolder className={classes} key={i} onClick={this.moveNext}>
                <Image imgName={image} />
              </ImageHolder>
            )
          })}
        </Holder>
      )
    } else {
      return null
    }
  }
}

export default Gallery
