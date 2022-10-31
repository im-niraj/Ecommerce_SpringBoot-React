package in.nirajkumar.MyMart.Model;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Buyer extends User{

    @OneToMany
    List<Cart_items> cart_items = new ArrayList<>();
}
