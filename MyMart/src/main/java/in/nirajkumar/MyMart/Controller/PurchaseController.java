package in.nirajkumar.MyMart.Controller;

import in.nirajkumar.MyMart.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.ConsumptionProbe;
@RestController
@RequestMapping("/api/purchases")
@CrossOrigin
public class PurchaseController {

    @Autowired
    private PurchaseService purchaseService;
    @Autowired
    private Bucket bucket;
    @PostMapping("/complete")
    public ResponseEntity<?> completePurchase(@RequestParam int userId, @RequestParam int productId) {
        // 尝试从 bucket 中消耗一个令牌
        ConsumptionProbe probe = bucket.tryConsumeAndReturnRemaining(1);
        if (probe.isConsumed()) {
            try {
                String result = purchaseService.completePurchase(userId, productId);
                return ResponseEntity.ok(result); // HTTP 200
            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest().body(e.getMessage()); // HTTP 400
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while purchase"); // HTTP 500
            }
        } else {
            // 如果令牌消耗失败，返回速率限制错误
            long waitForRefill = probe.getNanosToWaitForRefill() / 1_000_000_000;
            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                    .header("X-Rate-Limit-Retry-After-Seconds", String.valueOf(waitForRefill))
                    .body("You have exhausted your API request quota. Try again in " + waitForRefill + " seconds.");
        }
    }
}
