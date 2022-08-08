package eu.filip.controller;

import eu.filip.service.MovieService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
    private MovieService movieService;

    public ApiController(MovieService movieService) {
        this.movieService = movieService;
    }

    public ResponseEntity<?> getMovies(){
        return new ResponseEntity.ok(movieService.findPaginated(1, 10));
    }
}
