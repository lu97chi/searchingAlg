import styled, { keyframes } from 'styled-components';

const Visited = keyframes`
    0% {
      transform: scale(1);
      background-color: rgba(0, 0, 66, 0.75);
      border-radius: 100%;
    }
  
    50% {
      background-color: rgba(17, 104, 217, 0.75);
    }
  
    75% {
      transform: scale(1.2);
      background-color: rgba(0, 217, 159, 0.75);
    }
  
    100% {
      transform: scale(1);
      background-color: rgba(0, 190, 218, 0.75);
    }
`


export const StateContainer = styled.div`
    width: ${({size}) => `${size}px`};
    height: ${({size}) => `${size}px`};
    color: #ffffff;
    border-radius: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-align: center;
    background: rgb(175, 216, 248);
    top: ${({top}) => top};
    left: ${({left}) => left};
    &:hover{
        animation: ${Visited} 1.5s linear forwards;
    }
`;
