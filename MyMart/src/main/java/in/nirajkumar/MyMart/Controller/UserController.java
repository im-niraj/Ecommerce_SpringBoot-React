package in.nirajkumar.MyMart.Controller;

import in.nirajkumar.MyMart.requests.NewUserRequest;
import in.nirajkumar.MyMart.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/signupTest")
    public String testApp() {
        return "Hello Spring Security!";
    }
    @GetMapping("/signupTest2")
    public String testApp2() {
        return "Hello2 Spring Security2!";
    }


    @PostMapping("/signup")
    public ResponseEntity<String> createNewAccount(@RequestBody NewUserRequest newUserRequest){
        return new ResponseEntity<>(userService.createNewAccount(newUserRequest), HttpStatus.CREATED);
    }

}
