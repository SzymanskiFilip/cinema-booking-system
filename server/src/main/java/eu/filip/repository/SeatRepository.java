package eu.filip.repository;

import eu.filip.entity.Seance;
import eu.filip.entity.Seat;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeatRepository extends CrudRepository<Seat, Long> {

    @Query(nativeQuery = true, value = "select * from SEATS where seance_id = ?1")
    List<Seat> findAllBySeanceId(Long id);
}
