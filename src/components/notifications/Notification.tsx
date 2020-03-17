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

  const handleOneSignalPush = () => {
    // TODO: handle this loginc later
  };

  const handleFCMPush = () => {};

  return (
    <StyledWrapper>
      <button onClick={handleOneSignalPush} className="button">
        Push notification (One Signal)
      </button>
      <button onClick={handleFCMPush} className="button">
        Push notification (FCM)
      </button>
    </StyledWrapper>
  );
};

export default Notifications;
