import React from 'react';
import styled from 'styled-components';

const Animations = (props: any) => {
  const StyledAnimationsContainer = styled.div`
    width: 90%;
    height: 90vh;
    margin-left: 10%;
    position: relative;
    padding: 10rem;
  `;

  const StyledAnimationsGrid = styled.div`
    width: 60%;
    height: 50vh;
    margin: auto;
    border: 1px solid black;
  `;

  //const AnimationWrapper = styled``
  return (
    <StyledAnimationsContainer>
      <StyledAnimationsGrid></StyledAnimationsGrid>
    </StyledAnimationsContainer>
  );
};

export default Animations;
