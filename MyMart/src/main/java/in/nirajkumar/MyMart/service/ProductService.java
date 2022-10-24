package in.nirajkumar.MyMart.service;

import in.nirajkumar.MyMart.Model.Product;

import java.util.List;

public interface ProductService {
    String addNewProduct(Product product);
    List<Product> getAllProduct();
    String deleteProduct(int id);
    Product getProductById(int id);
    String updateProduct(int id, Product product);
    String updatePrice(int id, double price);
}
