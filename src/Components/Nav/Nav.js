import React from 'react';




const nav  = (props) => {
    
    return (
    <div className="row center">
    <div className="col s12">
      <div className="card black">
        <div className="card-content green-text">
          <span className="card-title">Zerg Unit Guessing Game</span>
          <p>Click on the units below once to begin the game <br/>
          Clicking on the same unit twice will end the game.</p>
        </div>
        <div className="card-action">
          <p className="green-text">SCORE: {props.score}</p>
          <p className="green-text">HIGH-SCORE: {props.currentScore}</p>
          
        </div>
      </div>
    </div>
  </div>
    )
}

export default nav;