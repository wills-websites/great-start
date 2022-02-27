import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Holder = styled.div`
  
`;

function AccordionGroup( { children, clickHandler } ) {

  const [ active, setActive ] = useState( null );

  const handleClick = ( clickedItem ) => {
    const newActive = clickedItem !== active ? clickedItem : null;
    setActive( newActive );
    if ( clickHandler ) { clickHandler(newActive); }
  };

  return (
    <Holder>
      {React.Children.map( children, ( child, i ) => (
        React.cloneElement( child, {
          i: i,
          active: active === i,
          clickHandler: handleClick,
        } )
      ) )}
    </Holder>
  )
}

AccordionGroup.propTypes = {
  clickHandler: PropTypes.func,
};

export default AccordionGroup;
