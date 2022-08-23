import {GetServerSideProps, GetServerSidePropsContext, NextPage} from "next";
import {useRouter} from "next/router";
import seances from "./index";

type seance = {
    name: string;
}

const Seance: NextPage<seance> = ({name}: {name: string}) => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <div>
            <div>{id}</div>
            <h1>{name}</h1>
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return{
        props: {
            name: "filip"
        }
    }
}

export default Seance;