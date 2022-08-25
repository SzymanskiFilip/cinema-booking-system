import {GetServerSideProps, GetServerSidePropsContext, NextPage} from "next";
import {useRouter} from "next/router";
import seances from "./index";
import {getDateString} from "../../util/getDateString";
import Seat from "../../components/seances/Seat";
import {getArrayOfSeats} from "../../util/getArrayOfSeats";
import SeatsList from "../../components/seances/SeatsList";
import {useState} from "react";

type seance = {
    id: number;
    playDate: string;
    availableSeats: number;
    movie: {
        id: number;
        title: string;
        yearOfRelease: number;
        duration: number;
        coverURL: string;
    }
}

type seat = {
    id: number;
    seatNumber: number;
    email: string;
}

type PageProps = {
    seance: seance;
    seats: seat[];
}

const Seance: NextPage<PageProps> = ({seance, seats}: PageProps) => {

    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

    function addSeat(id: number){
        setSelectedSeats([...selectedSeats, id]);
    }

    return (
        <div className="seance">
            <div className="seance__short-info seance__side seance__side__left">
                <h1>{seance.movie.title}</h1>
                <h1>{getDateString(new Date(seance.playDate))}</h1>
                <img src={seance.movie.coverURL} alt="cover" height="200px" width="200px" className="rounded"/>
            </div>

            <div className="seance__seats-section">
                <h1 className="screen-baner">SCREEN</h1>
                <SeatsList seats={seats} addSeat={addSeat}/>
            </div>

            <div className="seance__reservation-info seance__side">
                <h1>Selected seats:</h1>
                <div>
                    {
                        selectedSeats.map(num => {
                            return <p>{num}</p>
                        })
                    }
                </div>
                <button>RESERVE</button>
            </div>
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    const {id} = context.query;

    const res = await fetch(`http://localhost:8080/seances?id=${id}`);
    const seance: seance = await res.json();

    const resSeats = await fetch("http://localhost:8080/seats?id=1");
    const seats: seat[] = await resSeats.json();

    return{
        props: {
            seance, seats
        }
    }
}

export default Seance;