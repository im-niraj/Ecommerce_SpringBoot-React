package in.nirajkumar.MyMart.Dao;

import in.nirajkumar.MyMart.Model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
    // 根据用户ID查找购买记录
    List<Purchase> findByUserId(Long userId);

    // 根据产品ID查找购买记录
    List<Purchase> findByProductId(Long productId);

    // 可以添加更多的自定义查询，如果需要的话
}
