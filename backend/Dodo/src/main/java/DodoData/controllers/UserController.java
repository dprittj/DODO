package DodoData.controllers;


import DodoData.dto.LoginFormDTO;
import DodoData.dto.RegisterUserDTO;
import DodoData.models.DodoRepos.InterestsTypeRepository;
import DodoData.models.DodoRepos.ProfileRepository;
import DodoData.models.DodoRepos.UserRepository;
import DodoData.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

//CrossOrigin determines pulling information from the frontEnd.
// * means it is listening for any data being passed from the frontend
// maxAge=3600 allows for the session to timeout after 90 minutes of inactivity
//since it is a RestController, it waits for the frontend to push data back
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    private InterestsTypeRepository interestsTypeRepository;

    //uses JPA userRepository to handle any CRUD operations on the data
    @Autowired
    UserRepository userRepository;

    //registerUser takes in the newUser and saves it in the database
    @PostMapping("/signup")
    public User registerUser(@RequestBody RegisterUserDTO newUser){
        User user = new User(newUser.getUsername(), newUser.getPassword());
        userRepository.save(user);
        return user;
    }

    //authenticateUser takes in a user and checks if it exists in the database.
    //if user exists, we will allow the login.

//    @PostMapping("/login")
//    public Optional<User> authenticateUser(@RequestBody User user){
//        return userRepository.findByUsername(user.getUsername());
//    }

    //adding handler method below, starting draft commented out above. Below attempting logic to use LoginFormDTO, still needs to be cleaned up.
    @PostMapping("/login")
    public LoginFormDTO authenticateUser(@RequestBody LoginFormDTO existingUser, HttpServletRequest request){
        Optional<User> theUser = userRepository.findByUsername(existingUser.getUsername());

        String password = existingUser.getPassword();

        return existingUser;
    }

}
