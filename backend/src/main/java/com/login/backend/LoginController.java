package com.login.backend;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class LoginController {
    
    @GetMapping("/")
    public String hello() {
        return "hello world";
    }
    
}
