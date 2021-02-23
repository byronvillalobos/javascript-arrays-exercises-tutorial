let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

const state = {
     totalSlots: 0,
     availableSlots: 0,
     occupiedSlots: 0}


function getParkingLotState(parkinglot) {

    for (let y = 0; y < parking_state.length; y++) {
        for (let x = 0; x < parking_state[y].length; x++) {
            if (parking_state[y][x] == 2) {
                state.availableSlots++;
                state.totalSlots++;
            }
            else if (parking_state[y][x] == 1) {
                state.totalSlots++;
                state.occupiedSlots++;

            }
            else if (parking_state[y][x] == 0) {

            };
        };

    };
    return state;
}



console.log(getParkingLotState(parking_state));