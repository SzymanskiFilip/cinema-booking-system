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

