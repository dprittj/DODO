package DodoData.controllers;

import DodoData.dto.InterestsDTO;
import DodoData.dto.MessageResponse;
import DodoData.models.DodoRepos.InterestsTypeRepository;
import DodoData.models.DodoRepos.UserRepository;
import DodoData.models.InterestsType;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hibernate.validator.constraints.URL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.Charset;
import java.util.List;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class InterestControl {

    @Autowired
    InterestsTypeRepository interestsTypeRepository;

    @Autowired
    UserRepository userRepository;

    private List<InterestsType> userChoices;

    @PostMapping ("/buildnest")
    public ResponseEntity<?> userInterests(@RequestBody InterestsDTO savedInterest){



        InterestsType interestsType = new InterestsType(savedInterest.getInterestsChecked(), savedInterest.getInterestName());

        interestsTypeRepository.save(interestsType);
        System.out.println(savedInterest.getInterestsChecked());
        return ResponseEntity.ok(new MessageResponse("Interests saved!"));

    }

//    @PostMapping("/buildnest")
//    public ResponseEntity<ObjectMapper> returnInterestsObject(@RequestBody InterestsDTO savedInterest) throws JsonParseException, JsonMappingException, IOException{
//
//        ObjectMapper interestsMapper = new ObjectMapper();
//
//        InputStream fileInputStream = new FileInputStream("http://localhost:4200/buildnest");
//        InterestsType typeInterests = interestsMapper.readValue(fileInputStream, InterestsType.class);
//        fileInputStream.close;
//
//    }

//    public static InterestsType getJsonInterests(URL "http://localhost:4200/buildnest") {
//        String json = IOUtils.toString(url, Charset.forName("UTF-8"));
//        return new InterestsType(json);
//    }



}
