package eu.filip.controller;

import eu.filip.service.SeatsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SeatsController {

    private SeatsService seatsService;

    public SeatsController(SeatsService seatsService) {
        this.seatsService = seatsService;
    }

    @GetMapping("/seats")
    public ResponseEntity<?> getSeats(@RequestParam(name = "id") Long id){
        //request param id
        //TODO: IMPLEMENT GETTING ARRAY OF SEATS AND INFORMATION ABOUT THEM
        if(id != null){
            return ResponseEntity.ok(seatsService.getSeatsBySeanceID(id));
        }

        return ResponseEntity.ok("");
    }

}
