package eu.filip.service;

import eu.filip.entity.Seat;
import eu.filip.repository.SeatRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatsService {
    private SeatRepository seatRepository;

    public SeatsService(SeatRepository seatRepository) {
        this.seatRepository = seatRepository;
    }

    public List<Seat> getSeatsBySeanceID(Long id){
        return seatRepository.findAllBySeanceId(id);
    }
}
