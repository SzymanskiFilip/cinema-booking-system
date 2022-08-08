package eu.filip.integraiontest;

import eu.filip.entity.Movie;
import eu.filip.service.MovieService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Profile;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;

import static org.hamcrest.Matchers.containsString;
import static org.mockito.ArgumentMatchers.contains;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("integration")
public class MoviesController {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private MovieService movieService;

    @BeforeAll
    @DisplayName("A message should be printed before the tests start")
    public static void startup(){
        System.out.println("THIS IS PRINTED BEFORE ALL TESTS");
    }

    @Test
    @DisplayName("should return a page of movies that contains the movie with a title of Fight Club")
    void httpGet_returnsPage() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/movies?pageNumber=0&pageSize=1"))
                .andExpect(MockMvcResultMatchers.status().is2xxSuccessful())
                .andExpect(MockMvcResultMatchers.content().string(containsString("\"title\":\"Fight Club\"")));
    }
}
