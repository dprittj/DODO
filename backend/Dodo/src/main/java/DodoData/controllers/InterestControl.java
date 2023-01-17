package DodoData.controllers;

import DodoData.dto.InterestsDTO;
import DodoData.dto.MessageResponse;
import DodoData.models.DodoRepos.InterestsTypeRepository;
import DodoData.models.DodoRepos.UserRepository;
import DodoData.models.InterestsType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class InterestControl {

    @Autowired
    InterestsTypeRepository interestsTypeRepository;

    @Autowired
    UserRepository userRepository;

    private List<InterestsType> userChoices;

//    public void interestsList(){
//        for (String interest : interestsArray) {
//            interestsTypeRepository.save(interest);
//        }
//    }

    @PostMapping ("/buildnest")
    public ResponseEntity<?> userInterests(@RequestBody InterestsDTO savedInterest){
        InterestsType interestsType = new InterestsType(savedInterest.getInterestsChecked(), savedInterest.getInterestName());
        interestsTypeRepository.save(interestsType);
        System.out.println(savedInterest.getInterestsChecked());
        return ResponseEntity.ok(new MessageResponse("Interests saved!"));

    }

//    @PostMapping("/buildnest")
//    public ResponseEntity<?> userInterests(@RequestParam(required=false) InterestsType savedInterest) {
//
//        if (interestsType.id != null) {
//            interestsTypeRepository.save(savedInterest);
//        }
//
//        return ResponseEntity.ok(new MessageResponse("Interests saved!"));
//    }

}
