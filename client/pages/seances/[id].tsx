import {GetServerSideProps, GetServerSidePropsContext, NextPage} from "next";
import {useRouter} from "next/router";
import seances from "./index";

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

const Seance: NextPage<seance> = ({seance}: any) => {
    return (
        <div>
            <h1>{}</h1>
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    const {id} = context.query;

    const res = await fetch(`http://localhost:8080/seances?id=${id}`);
    const seance = await res.json();

    return{
        props: {
            seance
        }
    }
}

export default Seance;