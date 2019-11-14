import React, { Component } from 'react'

class Elevator extends Component {
  componentWillMount() {
    this.currentFloor =     0,
    this.targetFloor =      0,
    this.doorOpen =         false,
    this.history =          [],
    this.tripCount =        0,
    this.floorCount =       0
  }
}
export default Elevator
