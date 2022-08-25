type seat = {
    id: number;
    seatNumber: number;
    email: string;
}

type Props = {
    seats: seat[];
}

function SeatsList({seats}: Props): JSX.Element{
    
    return (
        <div></div>
    )
}

export default SeatsList;