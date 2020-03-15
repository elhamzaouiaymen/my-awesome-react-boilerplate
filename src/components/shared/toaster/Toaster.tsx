import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';

export interface ToasterProps {
  visible: boolean;
}
const Toaster: FunctionComponent<ToasterProps | any> = ({ visible, onClose }) => {
  const [classes, setClasses] = useState<string[]>([]);

  useEffect(() => {
    if (visible) {
      setClasses(['slide-top']);
      setTimeout(() => {
        onClose();
        setClasses(['slide-out-top']);
      }, 2000);
    }
  }, [visible]);

  const StyledToastWrapper = styled.div`
    position: absolute;
    right: 1em;
    top: 1em;
    width: 180px;
    padding-right: 1em;
    min-height: auto;
    border: 1px solid black;
    background-color: white;
  `;

  const StyledCloseButton = styled.div`
    padding: 0 !important;
    background-color: black;
    cursor: pointer;
    height: 21px;
    width: 20px;
    color: white !important;
    &:hover {
      background-color: white !important;
      border-right: 1px solid black;
      border-bottom: 1px solid black;
      color: black !important;
    }
    &::before {
      position: relative !important;
      margin: auto !important;
      top: -0.25em;
      content: 'x';
      font-size: 12px;
      font-family: 'Arial';
    }
  `;

  const StyledToastTitle = styled.h6`
    position: absolute;
    top: 2px;
    left: 2em;
  `;

  const StyledToastContent = styled.p`
    font-size: 13px;
    margin-left: 2.5em;
    text-align: left;
  `;

  return (
    visible && (
      <StyledToastWrapper className={classes.join(' ')}>
        <StyledCloseButton onClick={onClose} />
        <StyledToastTitle>Toast title</StyledToastTitle>
        <StyledToastContent>Lorem ipsum dolor sit amet consectetur adipisicing</StyledToastContent>
      </StyledToastWrapper>
    )
  );
};

export default Toaster;
