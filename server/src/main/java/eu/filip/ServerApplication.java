package eu.filip;

import eu.filip.entity.Movie;
import eu.filip.entity.Seance;
import eu.filip.entity.Seat;
import eu.filip.repository.MovieRepository;
import eu.filip.repository.SeanceRepository;
import eu.filip.repository.SeatRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;

import java.sql.Timestamp;

@SpringBootApplication
public class ServerApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(ServerApplication.class, args);

        MovieRepository movieRepository = context.getBean(MovieRepository.class);
        SeanceRepository seanceRepository = context.getBean(SeanceRepository.class);
        SeatRepository seatRepository = context.getBean(SeatRepository.class);

        Movie fightClub = new Movie(
                1L,
                "Fight Club",
                1999,
                139,
                "CURRENTLY_NONE"
        );

        Seance seance = new Seance(
                1L,
                1L,
                new Timestamp(Timestamp.valueOf("2022-08-09 20:00:00").getTime()),
                49
        );

        Seat seat = new Seat(
                1L,
                1L,
                12,
                "someplayer@gmail.com"
        );

        movieRepository.save(fightClub);
        seanceRepository.save(seance);
        seatRepository.save(seat);
    }

}
