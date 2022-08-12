type seance = {
    data: {
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
}
//

function SeanceRow({data}: seance): JSX.Element{
    return(
        <div className="movie-row">
            <img alt="123" src="https://img.actvid.com/xxrz/250x400/189/ea/b4/eab48fa4c71804c00008616715dd3777/eab48fa4c71804c00008616715dd3777.jpg"/>
            <div className="movie-row__content">
                <h1 className="text-5xl">{data.movie.title}</h1>
                <div className="flex flex-row">
                    <div className="movie-row__content__block">
                        <h1>DURATION</h1>
                        <h1>{data.movie.duration}</h1>
                    </div>
                    <div className="movie-row__content__block">
                        <h1>YEAR OF RELEASE</h1>
                        <h1>{data.movie.yearOfRelease}</h1>
                    </div>
                </div>

                <div className="flex flex-col">
                    <button className="btn btn__warning">MORE INFO</button>

                    <div className="flex flex-row">
                        <button className="btn btn__change">CHANGE SEAT</button>
                        <button className="btn btn__action">RESERVE SEAT</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SeanceRow;