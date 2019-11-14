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
      console.log(this.elevators[i].currentFloor)
      counts.unshift(this.elevators[i].currentFloor)
    }
    var closest = counts.reduce(function(prev, curr) {
      return (Math.abs(curr - floor) < Math.abs(prev - floor) ? curr : prev);
    });
    console.log(closest)
    const found = counts.find(x => x > closest);

    console.log("END CALL()")
    console.log(this.elevators)
  }

}

export default ElevatorController;
