import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import history from '../../../history';
const pocList = [
  {
    name: 'Authentication',
    path: '/auth',
  },
  {
    name: 'Animations',
    path: '/animations',
  },
  {
    name: 'Push Notification API',
    path: '/notifications',
  },
  {
    name: 'Games',
    path: '/games',
  },
];

const NavigationBar: FunctionComponent<{}> = () => {
  const StyledNavWrapper = styled.div`
    position: absolute;
    height: 95vh;
    width: 10%;
    border-right: 1px solid black;
  `;

  const StyledList = styled.ul`
    list-style-type: none !important;
    text-align: left;
    padding-left: 0 !important;
    li {
      width: 100%;
      border: 1px solid black;
      border-top: none;
      border-right: none;
      padding: 1em;
      cursor: pointer;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  `;

  const handleNavigation = (path: string) => {
    history.push(path);
  };

  return (
    <StyledNavWrapper>
      <StyledList>
        {pocList.map(p => (
          <li key={p.path.substring(1)} onClick={() => handleNavigation(p.path)}>
            {p.name}
          </li>
        ))}
      </StyledList>
    </StyledNavWrapper>
  );
};

export default NavigationBar;
