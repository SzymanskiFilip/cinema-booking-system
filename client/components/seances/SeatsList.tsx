import Seat from "./Seat";

type seat = {
    id: number;
    seatNumber: number;
    email: string;
}

type Props = {
    seats: seat[];
}

function SeatsList({seats}: Props): JSX.Element{
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
                    return <Seat id={seat.seatNumber}/>
                })
            }
        </div>
    )
}

export default SeatsList;