package in.nirajkumar.MyMart.Controller;

import in.nirajkumar.MyMart.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/purchases")
@CrossOrigin
public class PurchaseController {

    @Autowired
    private PurchaseService purchaseService;

    @PostMapping("/complete")
    public ResponseEntity<?> completePurchase(@RequestParam int userId, @RequestParam int productId) {
        try {
            String result = purchaseService.completePurchase(userId, productId);
            return ResponseEntity.ok(result); // HTTP 200
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage()); // HTTP 400
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while purchase"); // HTTP 500

        }
    }
}
