package eu.filip.controller;

import eu.filip.service.MovieService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MoviesController {
    private MovieService movieService;

    public MoviesController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/movies")
    public ResponseEntity<?> getMovies(@RequestParam(name = "pageNumber") int pageNumber, @RequestParam(name = "pageSize") int pageSize){
        return ResponseEntity.ok(movieService.findPaginated(pageNumber, pageSize));
    }
}
