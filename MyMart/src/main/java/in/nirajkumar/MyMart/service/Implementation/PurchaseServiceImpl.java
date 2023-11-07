package in.nirajkumar.MyMart.service.Implementation;

import in.nirajkumar.MyMart.Dao.*;
import in.nirajkumar.MyMart.Model.*;
import in.nirajkumar.MyMart.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;

@Service
public class PurchaseServiceImpl implements PurchaseService {
    private static final Logger logger = LoggerFactory.getLogger(PurchaseServiceImpl.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private PurchaseRepository purchaseRepository;

    @Autowired
    private CartItemRepository cartItemRepository; // Assuming you want to clear the cart after purchase

    @Override
    @Transactional
    public String completePurchase(int userId, int productId) {
        logger.info("Attempting to complete purchase for user {} and product {}", userId, productId);

        // Step 1: Validate user and product
        User user = null;
        Product product = null;
        try {
            user = userRepository.findById(userId)
                    .orElseThrow(() -> new IllegalArgumentException("User not found"));
            product = productRepository.findById(productId)
                    .orElseThrow(() -> new IllegalArgumentException("Product not found"));
        } catch (IllegalArgumentException e) {
            logger.error("Validation error: {}", e.getMessage());
            throw e;
        }
        // Step 2: Process payment
        // This would interface with a payment service and throw an exception if payment fails
        try {
            boolean paymentSuccess = processPayment(user, product);
            if (!paymentSuccess) {
                logger.info("Payment failed for user {} and product {}", userId, productId);
                return "Payment failed";
            }
        } catch (Exception e) {
            logger.error("Payment processing error for user {} and product {}: {}", userId, productId, e.getMessage(), e);
            throw e;
        }

        // Step 3: Update inventory and record purchase
        //productRepository.delete(product);

        try {
            Purchase purchase = new Purchase();
            purchase.setUserId(user.getId());
            purchase.setProductId(product.getId());
            purchase.setPurchaseDate(new Date());
            purchaseRepository.save(purchase);

            // Optional: Clear user's cart if needed
            //cartItemRepository.deleteByProductIdAndBuyerId(user.getId(), product.getId());

            logger.info("Purchase completed successfully for user {} and product {}", userId, productId);
        } catch (Exception e) {
            logger.error("Error recording purchase for user {} and product {}: {}", userId, productId, e.getMessage(), e);
            throw e;
        }

        return "Purchase completed successfully";
    }

    private boolean processPayment(User user, Product product) {
        logger.info("Processing payment for user {} and product {}", user.getId(), product.getId());

        // Logic to integrate with a payment processor

        return true;
    }
}