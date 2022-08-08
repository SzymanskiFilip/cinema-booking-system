import {NextPage} from "next";

type movie = {
    id: number;
    title: string;
    year_of_release: number;
    duration: number;
    cover_url: string;
}

type PageProps = {
    movies: movie[];
}

const Movies: NextPage<PageProps> = ({movies}) => {

    console.log(movies)

    return(
        <div>
            movies
        </div>
    )
}

export default Movies;

export async function getServerSideProps(){

    const res = await fetch("http://localhost:8080/movies?pageNumber=0&pageSize=10");
    const data = await res.json();

    return {
        props: {
            movies: data
        }
    }
}