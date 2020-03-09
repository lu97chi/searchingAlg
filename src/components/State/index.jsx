import React from 'react'
import { StateContainer } from './styled'
import './state.css';

const State = ({ name, top, left, size, isVisited }) => (
  <StateContainer className={`${isVisited ? 'animation' : null}`} size={size} top={top} left={left}>
    <p>{name}</p>
  </StateContainer>
)

export default State
