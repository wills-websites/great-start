import React, { useState } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"

const Holder = styled.div`
  width: 100%;
  max-width: 40rem;
  button {
    margin-bottom: 2rem;
  }
`;

const BallHolder = styled.div`
  overflow: hidden;
  height: 30rem;
  &.ball-appear,
  &.ball-enter {
    height: 0;
    .ball {
      transform: scale(0, 0);
    }
  }
  &.ball-appear-active,
  &.ball-appear-done,
  &.ball-enter-active,
  &.ball-enter-done {
    height: 30rem;
    transition: height 250ms;
    .ball {
      transform: scale(1, 1);
      transition: transform 250ms 250ms;
    }
  }
  &.ball-exit {
    height: 30rem;
    .ball {
      transform: scale(1, 1);
    }
  }
  &.ball-exit-active {
    height: 0;
    transition: height 250ms 250ms;
    .ball {
      transform: scale(0, 0);
      transition: transform 250ms;
    }
  }
`

const Ball = styled.div`
  background: black;
  border-radius: 50%;
  height: 30rem;
  width: 30rem;
  margin: 0;
  background: radial-gradient(circle at 10rem 10rem, #fff, #000);
`

function AnimatedThing() {
  const [show, setShow] = useState(false)

  return (
    <Holder>
      <button
        aria-label="Show the ball"
        onClick={() => {
          setShow(!show)
        }}
      >
        Show the ball
      </button>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        appear
        in={show}
        timeout={500}
        classNames="ball"
      >
        <BallHolder>
          <Ball className="ball" />
        </BallHolder>
      </CSSTransition>
    </Holder>
  )
}

export default AnimatedThing
