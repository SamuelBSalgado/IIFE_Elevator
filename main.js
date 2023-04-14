/* <--- IMPORTANT TO READ THE COMMENTS ON THE CONSOLE.LOG SECTION(line 163) TO UNDERSTAND THE SEQUENCE OF THE ROUTE ---> */
/*
+---------------------------------------------------------------------------------------------------------------+
|THERE ARE SOME "throw new Error(etc...);" FOLLOWED BY A "return elevator_status.message = new Error(etc...);"  |
|ON THE CODE. THE "throw new Errors" ARE COMMENTED, JUST SO THE CONSOLE CAN DISPLAY SOMETHING AFTER THE ERRORS. |
+---------------------------------------------------------------------------------------------------------------+
*/
const Elevator = ((number_of_floors) => {
    let elevator_status = {
        'message' : "",
        'message_Content' : {
            'currentFloor' : 1,
            'doorStatus' : false,
            'motion' : false
        }
    }

    _floor_Info = () => {
        elevator_status.message = "You're on the floor " + elevator_status.message_Content.currentFloor + "/" + number_of_floors;
            if (elevator_status.message_Content.doorStatus){
                elevator_status.message += ". The door is open.";
            } else{
                elevator_status.message += ". The door is closed.";
            }
            return elevator_status.message;
    }

    _floor_validation = (floor) => {
        if (floor < 1 || floor > number_of_floors){
            return false;
        } else{
            return true;
        }
    }

    //_security_validation = (motion) => {
    //     if (motion){
    //         elevator_status.message_Content.doorStatus = false;
    //     }
    // }

    _openDoor = () => {
        if (elevator_status.message_Content.doorStatus){
            // return elevator_status.message = "The door's already open";
        } else{
            elevator_status.message_Content.doorStatus = true;
            // return "The door's open";
        }
    }

    _closeDoor = () => {
        if (!elevator_status.message_Content.doorStatus){
            // return elevator_status.message = "The door's already closed";
        } else{
            elevator_status.message_Content.doorStatus = false;
            // return "The door's closed";
        }
    }

    _go_1_Up = () => {
        if (!elevator_status.message_Content.doorStatus){
            switch (true){
                case _floor_validation(elevator_status.message_Content.currentFloor + 1):
                    motion = true;
                    elevator_status.message_Content.currentFloor++;
                    return elevator_status.message = "Going a floor up";
                    break;
                default:
                    motion = false;
                    // throw new Error("You're already on the top floor. You can't go higher.");
                    return elevator_status.message = new Error("You're already on the top floor. You can't go higher.");
                    break;
            }
        } else{
            motion = false;
            // throw new Error("You can't change floors with an open door.");
            return elevator_status.message = new Error("You can't change floors with an open door.");
        }
    }

    _go_1_Down = () => {
        if (!elevator_status.message_Content.doorStatus){
            switch (true){
                case _floor_validation(elevator_status.message_Content.currentFloor - 1):
                    motion = true;
                    elevator_status.message_Content.currentFloor--;
                    return elevator_status.message = "Going a floor down";
                    break;
                default:
                    motion = false;
                    // throw new Error("You're already on the bottom floor. You can't go any lower.");
                    return elevator_status.message = new Error("You're already on the bottom floor. You can't go any lower.");
                    break;
            }
        } else{
            motion = false;
            // throw new Error("You can't change floors with an open door.");
            return elevator_status.message = new Error("You can't change floors with an open door.");
        }
    }

    _go_Specific_floor = (destiny) => {
        if (!elevator_status.message_Content.doorStatus){
            if (_floor_validation(destiny)){
                switch (true){
                    case destiny < elevator_status.message_Content.currentFloor:
                        motion = true;
                        elevator_status.message_Content.currentFloor = destiny;
                        return elevator_status.message = "Going down to floor " + elevator_status.message_Content.currentFloor;
                        break;

                    case destiny > elevator_status.message_Content.currentFloor:
                        motion = true;
                        elevator_status.message_Content.currentFloor = destiny;
                        return elevator_status.message = "Going up to floor " + elevator_status.message_Content.currentFloor;
                        break;
                
                    default:
                        motion = false;
                        // throw new Error("You're already on the floor " + destiny + ".");
                        return elevator_status.message = new Error("You're already on the floor " + destiny + ".");
                        break;
                }
            } else{
                motion = false;
                // throw new Error("The floor " + destiny + " doesn't exist");
                return elevator_status.message = new Error("The floor " + destiny + " doesn't exist");
            }
        } else{
            motion = false;
            // throw new Error("You can't change floors with an open door.");
            return elevator_status.message = new Error("You can't change floors with an open door.");
        }
    }

    return{
        floor_Status: () => {
            return _floor_Info();
        },

        open: () => {
            return _openDoor();
        },

        close: () => {
            return _closeDoor();
        },

        up: () => {
            return _go_1_Up();
        },

        down: () => {
            return _go_1_Down();
        },

        specificFloor: (destiny) => {
            return _go_Specific_floor(destiny);
        }
    }
})(200);

/* <-------------- CONSOLE.LOG SECTION --------------> */
Elevator.open(); //Opens the door to enter.
console.log(Elevator.floor_Status()); //Shows the current info.
Elevator.close(); //Closes the door.
console.log(Elevator.up()); //Goes 1 floor up.
console.log(Elevator.floor_Status()); //Shows current info.
console.log(Elevator.down()); //Goes 1 floor down.
console.log(Elevator.floor_Status()); //Shows current info.
console.log(Elevator.down()); //Tries to go 1 floor down being at the bottom floor.
Elevator.open(); //Opens the door.
console.log(Elevator.specificFloor(200)); //Tries to go up to a specific floor without closing the door.
Elevator.close(); //Closes the door.
console.log(Elevator.specificFloor(200)); //Goes up to a specific floor now with the door closed.
console.log(Elevator.floor_Status()); //Shows current info.
console.log(Elevator.up()); //Tries to go up another floor being at the top floor.
Elevator.open(); //Opens the door.
console.log(Elevator.specificFloor(50)); //Tries to go down to a specific floor without closing the door.
Elevator.close(); //Closes the door.
console.log(Elevator.specificFloor(50)); //Goes down to a specific floor now with the door closed.
console.log(Elevator.floor_Status()); //Shows current info.
console.log(Elevator.specificFloor(500)); //Tries to go up to a floor that doesn't exist.
console.log(Elevator.specificFloor(0)); //Tries to go down to a floor that doesn't exist.
console.log(Elevator.floor_Status()); //Shows current info.
console.log(Elevator.specificFloor(50)); //Tries to go to a floor he's already on.