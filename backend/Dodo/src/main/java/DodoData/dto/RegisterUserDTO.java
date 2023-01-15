package DodoData.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class RegisterUserDTO {

    @NotNull
    @NotBlank
    private String email;

    @NotNull
    @NotBlank
    private String username;

    private String location;

    @NotNull
    @NotBlank
    private String password;

    public String getEmail() {return email;}

    public void setEmail(String email) {this.email = email;}

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getLocation() {return location;}

    public void setLocation(String location) {this.location = location;}

    //password getters and setters are permitted in DTOs since DTOs are not persistent classes
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
