package eu.filip.service;

import eu.filip.entity.Movie;
import eu.filip.entity.Seance;
import eu.filip.entity.Seat;
import eu.filip.repository.SeanceRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SeanceService {
    private SeanceRepository seanceRepository;

    public SeanceService(SeanceRepository seanceRepository) {
        this.seanceRepository = seanceRepository;
    }

    public List<Seance> findByDateAndAmount(){
        Pageable request = PageRequest.of(0, 10, Sort.by("playDate").ascending());
        Page<Seance> pagedResult = seanceRepository.findAll(request);
        return pagedResult.toList();
    }

    public Optional<Seance> findById(Long id){
        return seanceRepository.findById(id);
    }
}
