package in.nirajkumar.MyMart.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cartID;

    @OneToMany
    private List<Product> products = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
