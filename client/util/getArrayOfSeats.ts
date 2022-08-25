type seat = {
    id: number;
    seatNumber: number;
    email: string;
}

export function getArrayOfSeats(seats: seat[]): seat[]{
    let newSeats: seat[] = [];
    for(let i = 0; i < seats.length; i++){
        newSeats[seats[i].seatNumber] = seats[i];
    }
    for(let i = 1; i <= 50; i++){
        if(newSeats[i] == undefined){
            newSeats.push({id: i, seatNumber: i, email: ""});
        }
    }
    return newSeats;
}