import React, { useEffect, useState } from 'react'
import './App.css'
import State from './components/State'
import Board from './components/Board'
import { AppContainer } from './styled'
import ScoreBoard from './components/ScoreBoard'
import Conections from './components/Connections'
import { statesCordinates } from './data'




const animations = ['SO', 'CHI', 'CO', 'NL', 'TAM', 'SL', 'GUA', 'QU']

// let conectionsAux = {};

function App() {
  const [animatedNodes, setAnimatedNodes] = useState([]);

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
        {statesCordinates.map(({ name, code, left, top, size = 80 }, index) => (
            <State
            isVisited={animatedNodes.includes(code)}
            size={size}
            name={code}
            top={`${top}px`}
            left={`${left}px`}
          />
        ))}
        <Conections />
      </Board>
      {/* <ScoreBoard
        data={statesCordinates.map(state => ({
          [state['code']]: state['name']
        }))}
      /> */}
    </AppContainer>
  )
}

export default App




// {/* {[...Array(26)].map((el, i) => <div>{[...Array(19)].map((el2, j) => <div style={{border: '1px solid yellow', width: '50px', height: '50px', fontSize: '12px'}}>{`left:${i*50}-top${j*50}`}</div>)}</div>)} */}
//         {/* <State top={'280px'} left={'50px'} name={'Mexico'} />
//         <div style={{position: 'absolute', width: '50px',height: '50px', top: '280px', left: '150px', border: '1px solid red'}}>There</div>
//         x1 = left(start + 40)
//         x2 = left(end + 40)
//         y1 = top(start + 80)
//         y2 = top(end + 40)

// x1 = current + 40
// x2 = targe + 40
// y1 = current + 40
// y2 = target + 40
//          */}