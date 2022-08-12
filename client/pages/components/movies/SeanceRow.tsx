type movie = {
    data: {
        id: number;
        title: string;
        year_of_release: number;
        duration: number;
        cover_url: string;
    }
}
//

function MovieRow({data}: movie): JSX.Element{
    return(
        <div className="movie-row">
            <img alt="123" src="https://img.actvid.com/xxrz/250x400/189/ea/b4/eab48fa4c71804c00008616715dd3777/eab48fa4c71804c00008616715dd3777.jpg"/>
            <div>
                <h1>{data.title}</h1>
                <div>
                    <h1>{data.year_of_release}</h1>
                    <h1>{data.duration}</h1>
                </div>
            </div>
        </div>
    )
};

export default MovieRow;