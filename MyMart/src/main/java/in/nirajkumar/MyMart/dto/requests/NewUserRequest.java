package in.nirajkumar.MyMart.dto.requests;

import lombok.Getter;

@Getter
public class NewUserRequest {
    private String firstName;
    private String lastName;
    private String userName;
    private String password;
    private String email;
    private String phoneNumber;
    private String city;
    private String district;
    private String state;
    private String pincode;
    private String streetAndLandmark;
    private Boolean isAdmin;

}
