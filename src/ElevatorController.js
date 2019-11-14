import React, { Component } from 'react'

class ElevatorController extends Component {

    componentDidMount() {
        this.buildingElevators   = [];
        this.Elevator = {
            currentFloor:     0,
            targetFloor:      0,
            doorOpen:         false,
            history:          [],
            tripCount:        0,
            floorCount:       0,
        };
    }

    initialize(numElevators,numFloors) {

    }

    render(){
        return true
    }

}

export default ElevatorController;
