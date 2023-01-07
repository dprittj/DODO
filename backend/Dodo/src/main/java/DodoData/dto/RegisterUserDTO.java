package DodoData.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class RegisterUserDTO {

    @NotNull
    @NotBlank
    @Size(min = 3, max = 30, message = "Invalid username. Must be between 3 and 30 characters.")
    private String username;

    @NotNull
    @NotBlank
    @Size(min = 5, max = 30, message = "Invalid password. Must be between 5 and 30 characters.")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    //password getters and setters are permitted in DTOs since DTOs are not persistent classes
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
