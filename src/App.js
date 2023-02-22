import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
import './assets/morty.jpg'
import './assets/Rick-sanchez.jpg'

const App = () => {
  const [square, setSquare] = useState(Array(9).fill(null))
  
    let [playerOne, setPlayerOne] = useState(true)
    let [playerTwo, setPlayertwo] = useState(false)

    const handleGamePlay = (clickedSquare) => {
      let updateBoard = [...square]
      if(playerOne){
        updateBoard[clickedSquare]= true ? "❌" : "⭕️"
        setSquare(updateBoard)
        playerOne = false
        setPlayerOne(playerOne)
        playerTwo = true
        setPlayertwo(playerTwo)
      }
      else if(playerTwo){
        updateBoard[clickedSquare] = true ? "⭕️" : "❌"
        setSquare(updateBoard)
        playerOne = true
        setPlayerOne(playerOne)
        playerTwo = false
        setPlayertwo(playerTwo)
      }
    }
  const winningSquares = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i=0; i < winningSquares.length; i++) {
      const [a, b, c] = winningSquares[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        alert("winner winner chicken dinner")
      }
    }

  return (
    <>
      <main className='background'>
      <h1 className='h1'>Rick and Morty: Tic Tac Toe</h1>
      <div className="board">
        {square.map((square, index) => {
          return (
            <Square 
            square={square}
            index={index}
            handleGamePlay={handleGamePlay} 
            />
            )
          })
          
        }

      </div>
      <br />
      <div className='button'>
        <button onClick={() => window.location.reload(false)} className="playagain">Play Again!</button>
      </div>
        </main>
    </>
  )
}

export default App