import {useState} from "react";
import seatsList from "./SeatsList";

type props = {
    id: number;
    taken: boolean;
}
function Seat({id, taken}: props): JSX.Element{

    const [selected, setSelected] = useState<boolean>(false);

    function getStyle(): string{
        let style: string = "seat ";
        if(taken){
            style += "seat__taken";
            return style;
        } else {
            style += "seat__free";
            return style;
        }
    }

    return(
        <div
            className={selected ? "seat seat__selected" : getStyle()}
            onClick={() => setSelected(!selected)}
        >
            <h1>{id}</h1>
        </div>
    )
}

export default Seat;