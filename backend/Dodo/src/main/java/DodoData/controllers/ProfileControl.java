package DodoData.controllers;

import DodoData.models.DodoRepos.InterestsTypeRepository;
import DodoData.models.DodoRepos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class ProfileControl {

    @Autowired
    InterestsTypeRepository interestsTypeRepository;

    @Autowired
    UserRepository UserRepository;

}
