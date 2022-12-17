package DodoData.controllers;

import DodoRepos.InterestsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

import static DodoData.models.InterestsType.userValue;

@Controller
@Component
public class Interests {

    @Autowired
    private InterestsRepo interestsRepo;

    @GetMapping()
    public String interestOptions(Model model){

        model.addAttribute("interests", interestsRepo.findAll());
        return "redirect";
    }

    @GetMapping
    public String interestChoices(){
        List<Iterable> choices = new ArrayList<>();
        choices.add(interestsRepo.findAll());

        for ( Iterable choice : choices) {
            if (userValue){


            }
        }

        return "userProfile";
    }

}
