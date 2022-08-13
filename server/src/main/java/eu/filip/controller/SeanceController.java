package eu.filip.controller;

import eu.filip.service.SeanceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    public ResponseEntity<?> getSeances(@RequestParam(required = false) Long id){
        if(id != null){
            if(seanceService.findById(id).isPresent()){
                return ResponseEntity.ok(seanceService.findById(id));
            } else {
                return ResponseEntity.notFound().build();
            }
        }
        return ResponseEntity.ok(seanceService.findByDateAndAmount());
    }


}
