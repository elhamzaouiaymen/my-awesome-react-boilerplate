import React from 'react';
import styled from 'styled-components';

const Notifications = (props: any) => {
  const StyledWrapper = styled.div`
    max-width: 300px;
    margin: auto;
    margin-top: 10%;

    button {
      margin: 0.5em;
    }
  `;
  return (
    <StyledWrapper>
      <button className="button">Push notification (One Signal)</button>
      <button className="button">Push notification (FCM)</button>
    </StyledWrapper>
  );
};

export default Notifications;
