package DodoData.controllers;

import DodoData.dto.ItineraryDTO;
import DodoData.models.DodoRepos.ItineraryRepo;
import DodoData.models.Itineraries;
import DodoData.models.DodoRepos.UserRepository;
import DodoData.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Array;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class ItineraryControl {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ItineraryRepo itineraryRepo;

    User user;


//    @PostMapping("")
    public Itineraries makeItinerary(@RequestBody ItineraryDTO newItinerary){

        Itineraries itinerary = new Itineraries(newItinerary.getPlaceName(), newItinerary.getPlaceHours(), newItinerary.getPlaceAddress());

        itineraryRepo.save(itinerary);

        return itinerary;
    }
}
