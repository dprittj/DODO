package DodoData.controllers;


import DodoData.models.DodoRepos.UserRepository;
import DodoData.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

//CrossOrigin determines pulling information from the frontEnd.
// * means it is listening for any data being passed from the frontend
// maxAge=3600 allows for the session to timeout after 90 minutes of inactivity
//since it is a RestController, it waits for the frontend to push data back
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {

    //uses JPA userRepository to handle any CRUD operations on the data
    @Autowired
    UserRepository userRepository;

    //registerUser takes in the newUser and saves it in the database
    @PostMapping("/signup")
    public User registerUser(@RequestBody User newUser){
        userRepository.save(newUser);
        return newUser;
    }

    //authenticateUser takes in a user and checks if it exists in the database.
    //if user exists, we will allow the login.
    @PostMapping("/login")
    public Optional<User> authenticateUser(@RequestBody User user){
        return userRepository.findByUsername(user.getUsername());
    }

}
