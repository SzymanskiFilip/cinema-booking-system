package eu.filip.repository;

import eu.filip.entity.Seance;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeanceRepository extends PagingAndSortingRepository<Seance, Long> {
}
