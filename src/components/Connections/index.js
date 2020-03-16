import React, { useEffect, useState } from 'react'
import { ConectionLine } from './styled'
import { statesCordinates } from '../../data'

const getLeftCordinates = (current, codesData) => {
  let payload = []
  if (codesData) {
    codesData.forEach(code => {
      const currentState = statesCordinates.find(state => state.code === code)
      if (currentState) {
        const currentLine = {
          // x1: current.left + 40,
          x1: !current.size ? current.left + 40 : current.left + 20,
          y1: !current.size ? current.top + 40 : current.top + 10,
          x2: !currentState.size ? currentState.left + 40 : currentState.left + 20,
          y2: !currentState.size ? currentState.top + 40 : currentState.top + 10
        }
        payload.push(currentLine)
      }
    })
  }
  return payload
}



const Conections = () => {
  const [lines, setLines] = useState([])
  useEffect(() => {
    statesCordinates.forEach(state => {
      setLines(lines => [...lines, getLeftCordinates(state, state.conections)])
    })
  }, [])
  if (lines.length) {
    return (
      <ConectionLine width='1450px' height='1000px'>
        {lines.map(line =>
          line.map(({ x1, x2, y1, y2 }, j) => (
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke='#FFFFFF' />
          ))
        )}
      </ConectionLine>
    )
  }
  return <div>loading</div>
}

export default Conections
