package DodoData.dto;

import java.util.HashMap;
import java.util.Map;

public class InterestsDTO {

    public String interestName;

    public Boolean interestsChecked;

    public InterestsDTO(Boolean check, String interestName, HashMap<String, Boolean> map) {
        this.interestsChecked = check;
        this.interestName = interestName;
    }

    public Boolean getInterestsChecked() {
        return interestsChecked;
    }

    public void setInterestType(Boolean check) {
        this.interestsChecked = check;
    }

    public String getInterestName() {
        return interestName;
    }

    public void setInterestName(String interestName) {
        this.interestName = interestName;
    }

}
