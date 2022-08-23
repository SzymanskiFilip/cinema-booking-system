import {NextPage} from "next";
import SeanceRow from "../../components/movies/SeanceRow";
import seanceRow from "../../components/movies/SeanceRow";

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

type PageProps = {
    seances: seance[];
}

const Movies: NextPage<PageProps> = ({seances}) => {

    console.log(seances)

    return(
        <div className="movies-list">
            {seances.map((seance) => {
                return <SeanceRow key={seance.id} data={seance}/>
            })}
        </div>
    )
}

export default Movies;

export async function getServerSideProps(){

    const res = await fetch("http://localhost:8080/seances");
    const data = await res.json();

    return {
        props: {
            seances: data
        }
    }
}