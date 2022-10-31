package in.nirajkumar.MyMart.Model;

import lombok.*;
import org.hibernate.annotations.Nationalized;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String itemTitle;
    private double price;

    //long text data type
    @Lob
    @Nationalized
    private String description;

    private String brand;
    private String category;
    private String image;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private Seller seller;
}
