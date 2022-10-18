package in.nirajkumar.MyMart.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class DemoController {

    @GetMapping
    public String testApp() {
        return "Hello Spring Security!";
    }
}
