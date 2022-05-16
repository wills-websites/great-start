import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Arrow from '../../assets/svg/arrow.inline.svg';
import { animateScroll as scroll } from 'react-scroll/modules';

const Holder = styled.div`
  border-bottom: 1px solid;
  &:first-child {
    border-top: 1px solid;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0.5rem 0;
    text-transform: none;
    text-align: left;
    > * { margin: 0; }
    svg {
      width: 1rem;
      margin: 0;
      height: auto;
      display: block;
      transform: ${props => props.active ? 'rotate(-90deg)' : 'rotate(90deg)'};
      transition: transform 500ms;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  max-height: ${props => props.active ? `${props.height}px` : 0};
  overflow: hidden;
  transition: max-height 500ms ease-in;
`;

const Inner = styled.div`
  padding: 1rem 0;
  > :first-child { margin-top: 0; }
  > :last-child { margin-bottom: 0; }
`;

function Accordion( { title, children, clickHandler, active, i, scrollTo } ) {
  const [ height, setHeight ] = useState( null );
  const [ pos, setPos ] = useState( null );
  const [ vw, setVW ] = useState( null );
  const container = useRef( null );
  const content = useRef( null );

  useEffect( () => {
      function updateSize() {
        if( window.innerWidth !== vw ) {
          if ( content.current ) {
            setHeight( content.current.offsetHeight );
          }
          if ( container.current ) {
            setPos( container.current.getBoundingClientRect().top + window.scrollY );
          }
          setVW(window.innerWidth);
        }
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
  }, [ content, container, vw ] );

  const handleClick = (i, pos) => {
    clickHandler( i );
    if ( pos && scrollTo ) {
      scroll.scrollTo(pos - 100, {
        duration: 500,
        smooth: 'easeInOutQuint',
      });
    }
  };

  return (
    <Holder active={active} ref={container}>
      <button className="link accordion-title" onClick={() => { handleClick( i, pos ) }}>{title}
        <span className="plus-icon"><Arrow/></span></button>
      <Content className="accordion-content" height={height || 2000} active={active}>
        <Inner ref={content}>
          {children}
        </Inner>
      </Content>
    </Holder>
  )
}

Accordion.propTypes = {
  title: PropTypes.element.isRequired,
  clickHandler: PropTypes.func,
  active: PropTypes.bool.isRequired,
  i: PropTypes.number.isRequired,
  scrollTo: PropTypes.bool,
};

Accordion.defaultProps = {
  clickHandler: null,
  active: false,
  i: 0,
  scrollTo: true,
};

export default Accordion;
