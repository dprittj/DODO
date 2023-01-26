package DodoData.controllers;

import DodoData.dto.ItineraryDTO;
import DodoData.models.DodoRepos.ItineraryRepo;
import DodoData.models.Itineraries;
import DodoData.models.DodoRepos.UserRepository;
import DodoData.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class ItineraryControl {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ItineraryRepo itineraryRepo;


    @PostMapping("/itineraries")
    public Itineraries makeItinerary(@RequestBody ItineraryDTO newItinerary){

        Itineraries itinerary = new Itineraries(newItinerary.getPlaceName(), newItinerary.getPlaceHours(), newItinerary.getPlaceAddress());

        itineraryRepo.save(itinerary);

        return itinerary;
    }
}
