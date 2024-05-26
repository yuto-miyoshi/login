package com.login.backend;

import org.springframework.web.bind.annotation.RestController;

import com.login.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class LoginController {

    @Autowired
    UserRepository userRepository;
    
    @GetMapping("/")
    public String hello() {
        System.out.println(userRepository.findAll());
        return "hello world";
    }
    
}
