import React, { useState } from 'react';
import styled from 'styled-components';

export const StickedProgressBar = () => {
  const [currentProgress, setCurrentProgress] = useState(0);

  const StyledProgressWrapper = styled.div`
    height: 10px;
    width: 100%;
    border: 1px solid black;
    margin-bottom: 2px;
    margin-top: 2px;
  `;

  const StyledProgressBar = styled.div`
    height: 10px;
    width: ${currentProgress}%;
    background: black;
    -webkit-animation: scale-up-hor-left 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-hor-left 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;

    @-webkit-keyframes scale-up-hor-left {
      0% {
        width: ${currentProgress !== 0 ? currentProgress - 20 : 0}%;
      }

      100% {
        width: ${currentProgress}%;
      }
    }
    @keyframes scale-up-hor-left {
      0% {
        width: ${currentProgress !== 0 ? currentProgress - 20 : 0}%;
      }

      100% {
        width: ${currentProgress}%;
      }
    }
  `;

  setTimeout(() => {
    if (currentProgress < 100) setCurrentProgress(currentProgress + 20);
  }, 1000);

  return (
    <StyledProgressWrapper>
      <StyledProgressBar />
    </StyledProgressWrapper>
  );
};
