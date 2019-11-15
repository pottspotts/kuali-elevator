import React from 'react';
import ElevatorController from './ElevatorController'
import './App.css';

const numElevators        = 5;
const numFloors           = 100;

function simulator(){
  let Control =  new ElevatorController(numElevators,numFloors);
  setInterval(() =>{
    // some simulation logic here...
  }, 1000);

  var randomFloor = Math.round(Math.random() * numFloors)
  Control.call(randomFloor)
}

function App() {

  simulator();

  return (
    <div className="App">
      <h3>Elevator Status</h3>
    </div>
  );
}

export default App;
