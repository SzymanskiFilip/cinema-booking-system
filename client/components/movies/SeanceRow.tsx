import Link from "next/link";

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

    let date = new Date(data.playDate);

    return(
        <div className="movie-row">
            <img alt="123" src={data.movie.coverURL}/>
            <div className="movie-row__content">
                <h1 className="text-5xl">{data.movie.title}</h1>
                <p>Date: {getDateString(date)}</p>
                <div className="flex flex-row">
                    <div className="movie-row__content__block">
                        <h1>DURATION</h1>
                        <h1>{data.movie.duration}min</h1>
                    </div>
                    <div className="movie-row__content__block">
                        <h1>YEAR OF RELEASE</h1>
                        <h1>{data.movie.yearOfRelease}</h1>
                    </div>
                </div>

                <div className="flex flex-col">
                    <Link href="/seances/1" passHref><a className="btn btn__warning">MORE INFO</a></Link>

                    <div className="flex flex-row">
                        <Link href={"/"} passHref><a className="btn btn__change">CHANGE SEAT</a></Link>
                        <Link href={`/seances/${data.id}`} passHref><a className="btn btn__action" >RESERVE SEAT</a></Link>
                    </div>
                </div>

                <h1>Seats: {data.availableSeats} / 50</h1>
            </div>
        </div>
    )
};

function getDateString(date: Date): string{
    let day: string;
    let month: string;

    let hours: string;
    let minutes: string;

    if(date.getDay() < 10){
        day = `0${date.getDay()}`;
    } else {
        day = date.getDay().toString();
    }

    if(date.getMonth() < 10){
        month = `0${date.getMonth()}`;
    } else {
        month = date.getMonth().toString();
    }

    if(date.getHours() < 10){
        hours = `0${date.getHours()}`;
    } else {
        hours = date.getHours().toString();
    }

    if(date.getMinutes() < 10){
        minutes = `0${date.getMinutes()}`;
    } else {
        minutes = date.getMinutes().toString();
    }

    let dateString = `${hours}:${minutes} - ${day}.${month}.${date.getFullYear()}`;

    return dateString;
}

export default SeanceRow;