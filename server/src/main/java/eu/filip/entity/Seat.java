package eu.filip.entity;

import javax.persistence.*;

@Entity
@Table(name = "seats")
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "seance_id", referencedColumnName = "id")
    private Seance seance;

    @Column(name = "seat_number")
    private int seatNumber;

    private String email;

    public Seat(Long id, Seance seance, int seatNumber, String email) {
        this.id = id;
        this.seance = seance;
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
