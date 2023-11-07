package in.nirajkumar.MyMart.Dao;

import in.nirajkumar.MyMart.Model.Cart_items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface CartItemRepository extends JpaRepository<Cart_items, Integer> {
    Cart_items findByProductIdAndBuyerId(Integer product_id, Integer buyer_id);
    @Transactional
    @Modifying
    void deleteByProductIdAndBuyerId(@Param("productId") Integer productId, @Param("buyerId") Integer buyerId);

}
