package eu.filip.entity;

import javax.persistence.*;

@Entity
@Table(name = "seats")
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "seance_id")
    private Long seanceId;

    @Column(name = "seat_number")
    private int seatNumber;

    private String email;

    public Seat(Long id, Long seanceId, int seatNumber, String email) {
        this.id = id;
        this.seanceId = seanceId;
        this.seatNumber = seatNumber;
        this.email = email;
    }

    public Seat(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSeanceId() {
        return seanceId;
    }

    public void setSeanceId(Long seanceId) {
        this.seanceId = seanceId;
    }

    public int getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(int seatNumber) {
        this.seatNumber = seatNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
