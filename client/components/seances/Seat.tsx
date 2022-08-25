import {useState} from "react";
import seatsList from "./SeatsList";

type props = {
    id: number;
    taken: boolean;
    addSeat: (id: number) => void;
    removeSelection: (id: number) => void;
}
function Seat({id, taken, addSeat, removeSelection}: props): JSX.Element{

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

    function select(){
        if(!taken){
            setSelected(!selected);
            if(!selected){
                addSeat(id);
            }
            if(selected){
                removeSelection(id);
            }
        }
    }

    return(
        <div
            className={selected ? "seat seat__selected" : getStyle()}
            onClick={select}
        >
            <h1>{id}</h1>
        </div>
    )
}

export default Seat;