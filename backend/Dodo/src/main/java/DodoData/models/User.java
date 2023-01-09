package DodoData.models;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;

@Entity

@Table(name="User")
public class User extends IdAbstract {

    @NotBlank
    private String username;

    private String email;

    private String pwHash;

    @OneToOne
    private Profile userProfile;

    @ManyToMany(fetch =FetchType.LAZY)
    @JoinTable( name = "user_roles",
                joinColumns = @JoinColumn(name = "user_id"),
                inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    //constructors
    public User(String username, String password){
        this.username = username;
        this.pwHash = encoder.encode(password);
    }

    public User(){};

    //Getters and Setters:


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public String getPwHash() {
        return pwHash;
    }

    public void setPwHash(String pwHash) {
        this.pwHash = pwHash;
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

}
