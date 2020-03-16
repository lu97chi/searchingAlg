import styled, { keyframes } from 'styled-components';

const dash = keyframes`
to {
      stroke-dashoffset: 1000;
    }
` 
    

export const ConectionLine = styled.svg`
    /* stroke-dasharray: 100;
    animation: ${dash} 5s linear;
    animation-iteration-count: infinite; */
`;
