# Cinema Booking System

###### The Cinema Booking System is a application made with Spring Boot and Next.js.

The application allows to reserve a seat for a movie and in case someone wants to change their seat there is a option to change it via the associated email.


##### Dependencies used on the Server side:
```
- Spring Web
- Spring data JPA
- MySql Driver
- H2 Database
- Java Mail Sender
```

##### Database Schemas used:
```sql
create table movies (
    id bigint primary key,
    title varchar(60) not null,
    year_of_release int not null,
    duration int not null,
    cover_url text
);

create table seance (
    id bigint primary key ,
    movie_id bigint not null ,
    play_date datetime not null ,
    available_seats int not null default 50,
    foreign key (movie_id) references movies(id)
);

create table seats (
    id bigint primary key ,
    seance_id bigint primary key,
    seat_number int not null ,
    email varchar(320) not null ,
    foreign key (seance_id) references seance(id)
);

```