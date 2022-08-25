import Seat from "./Seat";

type seat = {
    id: number;
    seatNumber: number;
    email: string;
}

type Props = {
    seats: seat[];
    addSeat: (id: number) => void;
    removeSelection: (id: number) => void;
}

function SeatsList({seats, addSeat, removeSelection}: Props): JSX.Element{
    let seatsList: seat[] = [];

    for(let i = 1; i <= 50; i++){
        seatsList.push({id: i, seatNumber: i, email: ""});
    }
    for(let i = 0; i < seats.length; i++){
        seatsList[seats[i].seatNumber] = seats[i];
    }

    return (
        <div className="seats-list">
            {
                seatsList.map(seat => {
                    let taken: boolean = false;
                    if(seat.email.length > 3){
                        taken = true;
                    }
                    return <Seat id={seat.seatNumber} taken={taken} addSeat={addSeat} removeSelection={removeSelection}/>
                })
            }
        </div>
    )
}

export default SeatsList;