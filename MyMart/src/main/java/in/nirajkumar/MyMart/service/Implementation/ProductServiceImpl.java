package in.nirajkumar.MyMart.service.Implementation;

import in.nirajkumar.MyMart.Dao.ProductRepository;
import in.nirajkumar.MyMart.Model.Product;
import in.nirajkumar.MyMart.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public String addNewProduct(Product product) {
        productRepository.save(product);
        return "Product Added successfully";
    }

    @Override
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public String deleteProduct(int id) {
        Optional<Product> opt = productRepository.findById(id);
        if(opt.isPresent()){
            productRepository.deleteById(id);
            return "Product Deleted Successfully...";
        }
        return "Product id is invalid";
    }

    @Override
    public Product getProductById(int id) {
        return productRepository.findById(id).get();
    }

    @Override
    public String updateProduct(int id, Product product) {
        Optional<Product> opt = productRepository.findById(id);
        if(opt.isPresent()){
            product.setId(id);
            productRepository.save(opt.get());
            return "Product Updated";
        }
        return "Product id is invalid";
    }

    @Override
    public String updatePrice(int id, double price) {
        Optional<Product> opt = productRepository.findById(id);
        if(opt.isPresent()){
            opt.get().setPrice(price);
            productRepository.save(opt.get());
            return "Product Price Updated";
        }
        return "Product id is invalid";
    }
}
