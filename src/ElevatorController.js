import Elevator from "./Elevator";

class ElevatorController {

  constructor(numElevators,numFloors) {
    this.elevators = []
    for(var i=0;i<numElevators;i++){
      this.elevators.push(new Elevator(i))
    }
    console.log(this.elevators);
  }

  render(){
    return true
  }

}

export default ElevatorController;
