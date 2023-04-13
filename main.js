/* <------- IMPORTANT TO READ THE COMMENTS OF THE CONSOLE.LOGS TO UNDERSTAND THE SEQUENCE OF THE ROUTE -------> */

const Elevator = ((number_of_floors) => {
    // let Total_floors = number_of_floors;
    let currentFloor = 1;
    let openedDoor = false;

    function floor_validation(floor){
        if (floor < 1 || floor > number_of_floors){
            return false;
        } else{
            return true;
        }
    }

    return{
        floor_Status: function(){
            var text = "You're on the floor " + currentFloor + "/" + number_of_floors;
            if (openedDoor){
                text += ". The door is open.";
            } else{
                text += ". The door is closed.";
            }
            return text;
        },

        openDoor: function(){
            openedDoor = true;
            return "The door's open";
        },

        closeDoor: function(){
            openedDoor = false;
            return "The door's closed";
        },

        go_1_Up: function(){
            if (floor_validation(currentFloor + 1)){
                currentFloor++;
                return "Going up a floor";
            } else{
                return "You're already on the top floor. You can't go higher.";
            }
        },

        go_1_Down: function(){
            if (floor_validation(currentFloor - 1)){
                currentFloor--;
                return "Going down a floor.";
            } else{
                return "You're already on the bottom floor. You can't go any lower.";
            }
        },

        go_Specific_floor: function(destiny){
            if (floor_validation(destiny)){
                if (destiny < currentFloor){
                    currentFloor = destiny;
                    return "Going down to floor " + destiny;
                } else if (destiny > currentFloor){
                    currentFloor = destiny;
                    return "Going up to floor " + destiny;
                } else if (destiny == currentFloor){
                    return "You're already on the floor " + destiny;
                }
            } else {
                return "The floor " + destiny + " doesn't exist";
            }
        }
    }
    })(10);

console.log(Elevator.floor_Status()); //Returns the status (info) of the elevator.
console.log(Elevator.openDoor()); //Opens the door.
console.log(Elevator.go_1_Up()); //Goes ONLY 1 floor up.
console.log(Elevator.floor_Status()); //Returns the new status (info) of the elevator.
console.log(Elevator.closeDoor()); //Closes the door.
console.log(Elevator.go_Specific_floor(5)); //Goes to a specfic floor(more than only 1).
console.log(Elevator.floor_Status()); //Returns the new status (info) of the elevator.