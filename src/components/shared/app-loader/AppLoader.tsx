import React from 'react';
import styled from 'styled-components';

const AppLoader = () => {
  const StyledLoaderWrapper = styled.div`
    width: 100%;
    height: 100vh;
    psotion: fixed;
    border: 1px dashed black;
    span {
      position: absolute;
      font-size: 25px;
      top: 40%;
    }
  `;
  return (
    <StyledLoaderWrapper>
      <span className="ping">Loading ...</span>
    </StyledLoaderWrapper>
  );
};

export default AppLoader;
