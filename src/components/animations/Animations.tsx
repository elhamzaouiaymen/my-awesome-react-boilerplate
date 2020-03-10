import React from 'react';
import styled from 'styled-components';

const Animations = (props: any) => {
  const StyledAnimationsContainer = styled.div`
    width: 90%;
    height: 100vh;
    margin-left: 10%;
    position: relative;
    border: 1px solid black;
  `;

  const StyledAnimationsGrid = styled.div`
    width: 60%;
    height: 50vh;
    position: flex;
    margin: auto;
    margin-top: 15vh;
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
