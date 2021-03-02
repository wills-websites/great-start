import React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import styled from "styled-components"

//This variable will be responsible for our animation duration
const timeout = 500

const TransitionHolder = styled.div`
  position: relative;
`

const PageHolder = styled.div`
  width: 100%;
  &.page-appear,
  &.page-enter {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  &.page-appear-active,
  &.page-appear-done,
  &.page-enter-active,
  &.page-enter-done {
    opacity: 1;
    transition: opacity ${timeout}ms;
  }
  &.page-exit {
    opacity: 1;
  }
  &.page-exit-active {
    opacity: 0;
    transition: opacity ${timeout}ms;
  }
`

class Transition extends React.PureComponent {
  render() {
    //Destructuring props to avoid garbage this.props... in return statement
    const { children, location } = this.props

    return (
      //Using TransitionGroup and CSSTransition which are both
      //coming from  'react-transition-group' and are required for transitions to work
      <TransitionHolder>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={timeout}
            classNames="page"
          >
            <PageHolder>{children}</PageHolder>
          </CSSTransition>
        </TransitionGroup>
      </TransitionHolder>
    )
  }
}

export default Transition
