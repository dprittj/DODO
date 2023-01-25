package DodoData.controllers;

import DodoData.dto.InterestsDTO;
import DodoData.models.DodoRepos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class InterestControl {

    @Autowired
    UserRepository userRepository;



}
