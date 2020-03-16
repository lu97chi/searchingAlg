import React from 'react'
import { StateContainer } from './styled'
import Material from 'random-material-color';
import './state.css'

const State = ({ name, top, left, size, isVisited, ref }) => (
  <StateContainer
    color={Material.getColor()}
    ref={ref}
    className={`${isVisited ? 'animation' : null}`}
    size={size}
    top={top}
    left={left}
  >
    <p>{name}</p>
  </StateContainer>
)

export default State
