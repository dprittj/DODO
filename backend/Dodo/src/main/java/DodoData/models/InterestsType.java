package DodoData.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class InterestsType {

    @Id
    @GeneratedValue
    private int interestsId;

    private String interestsType;

    public static Boolean userValue;

    public InterestsType(int id, String type, boolean value){
        this.interestsId = id;
        this.interestsType = type;
        this.userValue = value;
    }

    public InterestsType(){

    }



}
