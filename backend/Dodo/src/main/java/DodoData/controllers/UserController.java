package DodoData.controllers;


import DodoData.models.DodoRepos.UserRepository;
import DodoData.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/signup")
    public User registerUser(@RequestBody User newUser){
        userRepository.save(newUser);
        return newUser;
    }

    @PostMapping("/login")
    public Optional<User> authenticateUser(@RequestBody User user){
        return userRepository.findByUsername(user.getUsername());
    }

}
