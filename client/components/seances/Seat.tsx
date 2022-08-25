type props = {
    id: number;
}

function Seat({id}: props): JSX.Element{
    return(
        <div className="seat">
            <h1>{id}</h1>
        </div>
    )
}

export default Seat;