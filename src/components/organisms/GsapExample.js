import React, {useEffect} from "react"
import styled from "styled-components"
import Image from "../atoms/Image"
import useScrollTrigger from "../../hooks/useScrollTrigger";

const Holder = styled.div``

const Inner = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  @media (${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`

function GsapExample() {
  const {tl, holderRef, gsap, st, q} = useScrollTrigger();

  useEffect(() => {
    if (!tl.current) {
      tl.current = st.matchMedia({
        // desktop
        "(min-width: 576px)": function () {
          gsap.timeline({
            scrollTrigger: {
              trigger: holderRef.current,
              start: "top 75%",
              end: "top 25%",
              scrub: 0.25,
            },
          }).from(q(`.column-one`), {
            x: -100,
            y: 50,
            autoAlpha: 0,
            duration: 1,
          }).from(q(`.column-two`), {
            x: 100,
            y: 50,
            autoAlpha: 0,
            duration: 1,
          }, 0)
        },
        // Add more breakpoints if needed.
        // See https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.matchMedia()
      })
    }
  })

  return (
    <Holder ref={holderRef}>
      <Inner>
        <div className="column-one">
          <Image imgName="dinosaur.jpg" />
          <p>Column 1 content</p>
        </div>
        <div className="column-two">
          <Image imgName="redfern.jpg" />
          <p>Column 2 content</p>
        </div>
      </Inner>
    </Holder>
  )
}

export default GsapExample
