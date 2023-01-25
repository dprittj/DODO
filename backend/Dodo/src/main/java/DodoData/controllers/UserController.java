package DodoData.controllers;


import DodoData.dto.JwtResponse;
import DodoData.dto.LoginFormDTO;
import DodoData.dto.MessageResponse;
import DodoData.dto.RegisterUserDTO;
import DodoData.models.DodoRepos.ItineraryRepo;
import DodoData.models.DodoRepos.RoleRepository;
import DodoData.models.DodoRepos.UserRepository;
import DodoData.models.ERole;
import DodoData.models.Role;
import DodoData.models.User;
import DodoData.security.jwt.JwtUtils;
import DodoData.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;
import java.util.stream.Collectors;

//CrossOrigin determines pulling information from the frontEnd.
// * means it is listening for any data being passed from the frontend
// maxAge=3600 allows for the session to timeout after 90 minutes of inactivity
//since it is a RestController, it waits for the frontend to push data back
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    ItineraryRepo itineraryRepo;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    //registerUser takes in the newUser and saves it in the database
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterUserDTO newUser) {
        if (userRepository.existsByUsername(newUser.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: This username is already taken!"));
        }
        if (userRepository.existsByEmail(newUser.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: This email is already in use!"));
        }
        User user = new User(newUser.getEmail(), newUser.getUsername(), newUser.getLocation(), newUser.getPassword());
        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName(ERole.ROLE_USER);
        roles.add(userRole);
        user.setRoles(roles);
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));

    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginFormDTO existingUser){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(existingUser.getUsername(), existingUser.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());
        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getLocation(),
                roles));
    }


}
