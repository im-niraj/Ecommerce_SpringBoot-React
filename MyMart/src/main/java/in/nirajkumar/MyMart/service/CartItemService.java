package in.nirajkumar.MyMart.service;

import in.nirajkumar.MyMart.Model.Cart_items;

import java.util.List;

public interface CartItemService {
    public String addProductToCart(int productId, int cartId);
    public List<Cart_items> cartProducts(int cartId);
    public String removeProductFromCartById(int productId,  int cartId);

}
