package in.nirajkumar.MyMart.Dao;

import in.nirajkumar.MyMart.Model.Cart_items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends JpaRepository<Cart_items, Integer> {
    Cart_items findByProductId(Integer product_id);
}
