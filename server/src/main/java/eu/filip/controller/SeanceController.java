package eu.filip.controller;

import eu.filip.service.SeanceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class SeanceController {
    private SeanceService seanceService;

    public SeanceController(SeanceService seanceService) {
        this.seanceService = seanceService;
    }

    @GetMapping("/seances")
    public ResponseEntity<?> getSeances(){
        return ResponseEntity.ok(seanceService.findByDateAndAmount());
    }

}
