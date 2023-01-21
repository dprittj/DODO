package DodoData.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Entity
public class InterestsType extends IdAbstract{

    Boolean interestsChecked;

    String interestName;

//    static HashMap<String, List> searchInterests = new HashMap<>();

//    static List<String> interestTypes = new ArrayList<>();
//    public static String[] interestsArray = {
//            "Music", "Outdoors", "Gaming", "Nature", "Art", "Sports", "Nightlife", "Food", "History", "ScienceTechnology", "Culture", "Fashion", "Books", "Movies", "HealthWellness"
//    };
//    public String interestItem(){
//        for (String interest : interestsArray) {
//            interestsType = interest;
//        }
//        return interestsType;
//    }

//    constructors
    public InterestsType(Boolean check, String name){
        this.interestsChecked = check;
        this.interestName = name;
    }

    public InterestsType(){

    }

    //Getters and Setters

    public String getInterestName() {
        return interestName;
    }

    public void setInterestName(String interestName) {
        this.interestName = interestName;
    }

    public Boolean getInterestsChecked() {
        return interestsChecked;
    }

    public void setInterestsChecked(Boolean check) {
        this.interestsChecked = check;
    }

}
