package eu.filip.repository;

import eu.filip.entity.Seance;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeanceRepository extends PagingAndSortingRepository<Seance, Long> {
}
