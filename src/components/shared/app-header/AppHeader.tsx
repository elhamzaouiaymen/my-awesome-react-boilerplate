import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const AppHeader: FunctionComponent<any> = ({ currentUser }) => {
  const StyledHeaderWrapper = styled.div`
    width: 100%;
    height: 5vh;
    border: 1px solid black;
    background-color: whitesmoke;
  `;

  const StyledProfilePicWrapper = styled.div`
    width: 100px;
    height: 100px;
    margin: auto;
    background-color: whitesmoke;
    border: 1px solid black;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  `;

  return (
    <StyledHeaderWrapper>
      <StyledProfilePicWrapper>
        {currentUser !== undefined && <img src={currentUser['photoURL']} />}
      </StyledProfilePicWrapper>
    </StyledHeaderWrapper>
  );
};

export default AppHeader;
