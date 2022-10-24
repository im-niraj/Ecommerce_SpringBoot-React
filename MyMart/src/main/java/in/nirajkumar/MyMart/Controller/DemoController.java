package in.nirajkumar.MyMart.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin
public class DemoController {

    @GetMapping
    public String testApp() {
        return "Hello Spring Security!";
    }
}
