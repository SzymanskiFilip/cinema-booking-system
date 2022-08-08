package eu.filip.entity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "seance")
public class Seance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "movie_id")
    private Long movieId;
    @Column(name = "play_date")
    private Timestamp playDate;
    @Column(name = "available_seats")
    private int availableSeats;

    public Seance(Long id, Long movieId, Timestamp playDate, int availableSeats) {
        this.id = id;
        this.movieId = movieId;
        this.playDate = playDate;
        this.availableSeats = availableSeats;
    }

    public Seance(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public Timestamp getPlayDate() {
        return playDate;
    }

    public void setPlayDate(Timestamp playDate) {
        this.playDate = playDate;
    }

    public int getAvailableSeats() {
        return availableSeats;
    }

    public void setAvailableSeats(int availableSeats) {
        this.availableSeats = availableSeats;
    }
}
