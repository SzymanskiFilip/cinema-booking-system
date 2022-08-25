type props = {
    id: number;
    taken: boolean;
}

function Seat({id, taken}: props): JSX.Element{



    return(
        <div className={taken ? "seat seat__taken" : "seat seat__free"}>
            <h1>{id}</h1>
        </div>
    )
}

export default Seat;