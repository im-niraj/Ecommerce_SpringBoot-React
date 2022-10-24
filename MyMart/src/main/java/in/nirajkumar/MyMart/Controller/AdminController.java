package in.nirajkumar.MyMart.Controller;


import in.nirajkumar.MyMart.Model.Product;
import in.nirajkumar.MyMart.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private ProductService productService;

    @PostMapping("/addProduct")
    public ResponseEntity<String> addNewProduct(@RequestBody Product product){
        return new ResponseEntity<String>(productService.addNewProduct(product), HttpStatus.CREATED);
    }

    @GetMapping("/allProduct")
    public ResponseEntity<?> getAllProduct(){
        return ResponseEntity.ok(productService.getAllProduct());
    }

    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id){
        return new ResponseEntity<>(productService.deleteProduct(id), HttpStatus.ACCEPTED);
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable int id){
        return new ResponseEntity<Product>(productService.getProductById(id), HttpStatus.OK);
    }

    @PutMapping("/updateProduct/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable int id, @RequestBody Product product){
        return new ResponseEntity<String>(productService.updateProduct(id, product), HttpStatus.ACCEPTED);
    }

    @PutMapping("/updatePrice/{id}")
    public ResponseEntity<String> updatePrice(int id, double price){
        return new ResponseEntity<String>(productService.updatePrice(id, price), HttpStatus.ACCEPTED);
    }
}
