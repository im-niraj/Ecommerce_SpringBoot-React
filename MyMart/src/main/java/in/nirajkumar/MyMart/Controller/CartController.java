package in.nirajkumar.MyMart.Controller;


import in.nirajkumar.MyMart.Model.Cart_items;
import in.nirajkumar.MyMart.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin
public class CartController {
    @Autowired
    private CartItemService cartItemService;

    @PostMapping("/addProductToCart/{productId}/{cartId}")
    public ResponseEntity<String> addProductToCart(@PathVariable int  productId, @PathVariable int cartId){
        return new ResponseEntity<>(cartItemService.addProductToCart(productId, cartId), HttpStatus.CREATED);
    }

    @GetMapping("/cart_products/{cartId}")
    public ResponseEntity<List<Cart_items>> cartProducts(@PathVariable int cartId){
        return new ResponseEntity<>(cartItemService.cartProducts(cartId), HttpStatus.OK);
    }

    @DeleteMapping("/removeProductFromCartById/{productId}/{cartId}")
    public ResponseEntity<String> removeProductFromCartById(@PathVariable int productId, @PathVariable int cartId){
        return new ResponseEntity<>(cartItemService.removeProductFromCartById(productId, cartId), HttpStatus.ACCEPTED);
    }

}
