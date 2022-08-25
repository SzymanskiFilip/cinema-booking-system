export function getDateString(date: Date): string{
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