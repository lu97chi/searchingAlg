import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import State from './components/State'
import Board from './components/Board'
import { AppContainer } from './styled'
import ScoreBoard from './components/ScoreBoard'

const statesCordinates = [
  {
    code: 'BC',
    name: 'Baja California',
    left: 50,
    top: 100
  },
  {
    code: 'BCS',
    name: 'Baja California Sur',
    left: 150,
    top: 300
  },
  {
    code: 'SO',
    name: 'Sonora',
    left: 250,
    top: 150
  },
  {
    code: 'CHI',
    name: 'Chihuahua',
    left: 450,
    top: 200
  },
  {
    code: 'SIN',
    name: 'Sinaloa',
    left: 400,
    top: 400
  },
  { code: 'DU', name: 'Durango', left: 550, top: 400 },
  { code: 'CO', name: 'Coahuila', left: 650, top: 300 },
  { code: 'NA', name: 'Nayarit', left: 450, top: 570 },
  { code: 'ZA', name: 'Zacatecas', left: 630, top: 500 },
  { code: 'NL', name: 'Nuevo Leon', left: 770, top: 350 },
  { code: 'JA', name: 'Jalisco', left: 570, top: 650 },
  { code: 'COL', name: 'Colima', left: 550, top: 750 },
  { code: 'MI', name: 'Michoacan', left: 700, top: 700 },
  { code: 'GU', name: 'Guerrero', left: 750, top: 800 },
  { code: 'OX', name: 'Oaxaca', left: 950, top: 850 },
  { code: 'CH', name: 'Chiapas', left: 1150, top: 850 },
  { code: 'TA', name: 'Tabasco', left: 1140, top: 750 },
  { code: 'CAM', name: 'Campeche', left: 1250, top: 700 },
  { code: 'YU', name: 'Yucatan', left: 1350, top: 600 },
  { code: 'QR', name: 'Quintana Roo', left: 1365, top: 700 },
  { code: 'VZ', name: 'Veracruz', left: 950, top: 700 },
  { code: 'PU', name: 'Puebla', left: 900, top: 770, size: 40 },
  { code: 'ME', name: 'Mexico', left: 800, top: 730, size: 40 },
  { code: 'AC', name: 'Aguas Calientes', left: 610, top: 590, size: 30 },
  { code: 'GUA', name: 'Guanajuato', left: 700, top: 600 },
  { code: 'QU', name: 'Queretaro', left: 800, top: 650, size: 40 },
  { code: 'HI', name: 'Hidalgo', left: 870, top: 670, size: 40 },
  { code: 'MO', name: 'Morelos', left: 850, top: 770, size: 35 },
  { code: 'TX', name: 'Tlaxcala', left: 900, top: 720, size: 30 },
  { code: 'TAM', name: 'Tamaulipas', left: 850, top: 450 },
  { code: 'SL', name: 'San Luis Potosi', left: 750, top: 500 }
]

const animations = ['BC', 'SO', 'CHI', 'CO', 'NL', 'TAM', 'SL', 'GUA', 'QU']
function App() {
  const [animatedNodes, setAnimatedNodes] = useState([])
  useEffect(() => {
    for (let i = 0; i < animations.length; i++) {
      ;(function(i) {
        window.setTimeout(function() {
          setAnimatedNodes(animatedNodes => [...animatedNodes, animations[i]])
        }, i * 500)
      })(i)
    }
  }, [])

  return (
    <AppContainer>
      <Board>
        {statesCordinates.map(({ name, code, left, top, size = 80 }) => (
          <State
            isVisited={animatedNodes.includes(code)}
            size={size}
            name={code}
            top={`${top}px`}
            left={`${left}px`}
          />
        ))}
        {/* {[...Array(26)].map((el, i) => <div>{[...Array(19)].map((el2, j) => <div style={{border: '1px solid yellow', width: '50px', height: '50px', fontSize: '12px'}}>{`left:${i*50}-top${j*50}`}</div>)}</div>)} */}
        {/* <State top={'280px'} left={'50px'} name={'Mexico'} />
        <div style={{position: 'absolute', width: '50px',height: '50px', top: '280px', left: '150px', border: '1px solid red'}}>There</div>
         */}
        <svg width='1800px' height='1500px'>
          <line x1='150' y1='280' x2='50' y2='280' stroke='#FFFFFF' />
        </svg>
      </Board>
      <ScoreBoard
        data={statesCordinates.map(state => ({
          [state['code']]: state['name']
        }))}
      />
    </AppContainer>
  )
}

export default App
