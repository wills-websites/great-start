import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../atoms/Container';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import _uniqueId from 'lodash/uniqueId';
import Image from '../atoms/Image';

gsap.registerPlugin( ScrollTrigger );

const Holder = styled.div`
  
`;

const Inner = styled.div.attrs( props => ({
  id: props.uniqueId || '',
}) )`
  display: grid;
  align-items: start;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  @media( ${props => props.theme.breakpoints.md} ) {
    grid-template-columns: 1fr 1fr;
  }
`;

function GsapExample() {
  const [ id, setId ] = useState( null );
  const holder = useRef( null );
  const tl = useRef( null );

  useEffect( () => {
    setId( _uniqueId( 'gsap-example-' ) );
  }, [] );

  useEffect( () => {
    if ( !tl.current && id ) {

      tl.current = ScrollTrigger.matchMedia( {
        // desktop
        '(min-width: 576px)': function () {
          gsap.timeline( {
            scrollTrigger: {
              trigger: holder.current,
              start: 'top 75%',
              end: 'top 25%',
              scrub: true,
            }
          } )
          .from( `#${id} .column:first-child`, {
            x: -100,
            y: 50,
            autoAlpha: 0,
            duration: 1,
          } )
          .from( `#${id} .column:last-child`, {
            x: 100,
            y: 50,
            autoAlpha: 0,
            duration: 1,
          }, 0 );

        }
      } );
    }
  }, [ id ] );

  return (
    <Holder ref={holder}>
      <Inner uniqueId={id}>
        <div className="column">
          <Image imgName="dinosaur.jpg"/>
          <p>Column 1 content</p>
        </div>
        <div className="column">
          <Image imgName="redfern.jpg"/>
          <p>Column 2 content</p>
        </div>
      </Inner>
    </Holder>
  )
}

export default GsapExample;
