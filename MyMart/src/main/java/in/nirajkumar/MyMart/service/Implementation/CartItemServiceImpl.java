package in.nirajkumar.MyMart.service.Implementation;

import in.nirajkumar.MyMart.Dao.CartItemRepository;
import in.nirajkumar.MyMart.Dao.ProductRepository;
import in.nirajkumar.MyMart.Dao.UserRepository;
import in.nirajkumar.MyMart.Model.Buyer;
import in.nirajkumar.MyMart.Model.Cart_items;
import in.nirajkumar.MyMart.Model.Product;
import in.nirajkumar.MyMart.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CartItemServiceImpl implements CartItemService {

    @Autowired
    private CartItemRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public String addProductToCart(int productId, int buyerId) {
        Buyer buyer =(Buyer)userRepository.findById(buyerId).get();
        if(buyer.getCart_items().size() > 0){
            boolean isPresent = false;
            for(Cart_items c : buyer.getCart_items()){
                if(c.getProduct().getId() == productId){
                    c.setQuantity(c.getQuantity()+1);
                    cartRepository.save(c);
                    userRepository.save(buyer);
                    isPresent = true;
                    break;
                }
            }
            if(!isPresent){
                Product product = productRepository.findById(productId).get();
                Cart_items cart_items = new Cart_items();
                cart_items.setProduct(product);
                cart_items.setQuantity(1);
                cart_items.setBuyer(buyer);
                buyer.getCart_items().add(cartRepository.save(cart_items));
                userRepository.save(buyer);
            }
            return "Product added to cart";
        }
        Product product = productRepository.findById(productId).get();
        Cart_items cart_items = new Cart_items();
        cart_items.setProduct(product);
        cart_items.setQuantity(1);
        cart_items.setBuyer(buyer);
        buyer.getCart_items().add(cartRepository.save(cart_items));
        userRepository.save(buyer);
        return "Product added to cart";
    }

    @Override
    public List<Cart_items> cartProducts(int cartId) {
//        Optional<Cart> optCart = cartRepository.findById(cartId);
//        if(optCart.isPresent()){
//            return optCart.get().getItems();
//        }
        return new ArrayList<>();
    }

    @Override
    public String removeProductFromCartById(int productId, int cartId) {
//        Optional<Cart> optCart = cartRepository.findById(cartId);
//        if(optCart.isPresent()){
//            List<Item> list = optCart.get().getItems();
//
//            if(list.size() > 0){
//                Iterator<Item> itr = list.iterator();
//                while (itr.hasNext()){
//                    Item  item = itr.next();
//                    if(item.getProduct().getId() == productId){
//                        if(item.getQuantity() > 1){
//                           item.setQuantity(item.getQuantity()-1);
//                        }
//                        else{
//                            itr.remove();
//                        }
//                    }
//                }
//                cartRepository.save(optCart.get());
//                return "Product removed from cart";
//            }
//            return "Product is not available";
//        }
        return "cart is not available";
    }
}
