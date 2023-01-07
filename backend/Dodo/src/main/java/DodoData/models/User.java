package DodoData.models;

import jdk.jfr.DataAmount;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity

@Table(name="User")
public class User extends IdAbstract {

    @NotBlank
    private String username;


    private String pwHash;

    @OneToOne
    private Profile userProfile;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    //constructors
    public User(String username, String password){
        this.username = username;
        this.pwHash = encoder.encode(password);
    }

    public User(){};

    //Getters and Setters:

    public String getUsername() {
        return username;
    }

//    public void setUsername(String username) {
//        this.username = username;
//    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

}
