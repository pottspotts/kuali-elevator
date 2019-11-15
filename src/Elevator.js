class Elevator {
  constructor(id) {
    this.id =               id;
    this.currentFloor =     Math.round(Math.random() * 100);
    this.targetFloor =      0;
    this.doorOpen =         false;
    this.history =          [];
    this.tripCount =        0;
    this.floorCount =       0
  }
  closeDoor() {
    this.doorOpen = false;
    this.history.push('Elevator #'+this.id+' doors have CLOSED.');
    console.log(this.history)
  }
  openDoor() {
    this.doorOpen = true;
    this.history.push('Elevator #'+this.id+' doors have OPENED.');
    console.log(this.history)
  }
  move(targetFloor, numFloors) {
    if(
        ! this.doorOpen // don't move if door is closed
        && this.currentFloor !== this.targetFloor // don't move if we're there already
        && this.targetFloor < numFloors -1 // don't go through the roof
        && this.targetFloor > 0 // don't move below floor 1
    ){
      if(this.currentFloor > this.targetFloor) this.currentFloor--;
      if(this.currentFloor < this.targetFloor) this.currentFloor++;
      this.history.push('Elevator #'+this.id+' has moved to floor '+this.currentFloor+'.');
      console.log(this.history)
    } else {
      this.history.push('Elevator #'+this.id+' is already at floor '+this.targetFloor+'.');
      console.log(this.history)
    }
  }
}
export default Elevator
