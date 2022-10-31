package in.nirajkumar.MyMart.Dao;

import in.nirajkumar.MyMart.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    public List<Product> findBySellerId(Integer userId);
}
