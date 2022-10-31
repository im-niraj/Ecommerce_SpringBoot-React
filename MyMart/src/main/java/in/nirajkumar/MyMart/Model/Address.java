package in.nirajkumar.MyMart.Model;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String city;
    private String district;
    private String state;
    private String pincode;
    private String streetAndLandmark;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
