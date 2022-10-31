package in.nirajkumar.MyMart.Model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Buyer extends User{
    @OneToMany(cascade = CascadeType.ALL)
    List<Cart_items> cart_items = new ArrayList<>();
}
