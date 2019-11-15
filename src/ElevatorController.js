import Elevator from "./Elevator";

class ElevatorController {

  constructor(numElevators,numFloors) {
    this.elevators = []
    for(var i=0;i<numElevators;i++){
      this.elevators.push(new Elevator(i))
    }
    console.log('Elevators established:')
    console.log(this.elevators);
  }

  call(floor){
    console.log('NEW CALL for floor '+floor+'.')
    var counts = []
    for(var i=0;i<this.elevators.length;i++){
      counts.unshift(this.elevators[i].currentFloor)
    }

    // Find the closest elevator by floor number
    var closest = counts.reduce(function(prev, curr) {
      return (Math.abs(curr - floor) < Math.abs(prev - floor) ? curr : prev);
    });

    // Find the associated Elevator object by the index of the 'closest' array
    var closestIdx = undefined
    for(var i=0;i<counts.length;i++){
      if(counts[i] === closest) {
        closestIdx = i
      }
    }
    console.log("SENDING elevator #%d to floor #%d",closestIdx,floor)
    this.elevators[closestIdx].targetFloor = floor
    console.log(this.elevators)
  }

}

export default ElevatorController;
