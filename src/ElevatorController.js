import React, { Component } from 'react'

class ElevatorController extends Component {

  constructor(props) {
    super(props)
    this.elevators   = [...Array(this.numElevators).keys()];
    console.log(this.elevators);
  }

  render(){
    return true
  }

}

export default ElevatorController;
