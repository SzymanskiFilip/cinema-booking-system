type props = {
    id: number;
}

function Seat({id}: props): JSX.Element{
    return(
        <h1>{id}</h1>
    )
}

export default Seat;