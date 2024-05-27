package com.login.backend;

import org.springframework.web.bind.annotation.RestController;

import com.login.backend.entity.User;
import com.login.backend.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class LoginController {

    @Autowired
    UserRepository userRepository;
    
    @GetMapping("/")
    public String test() {
        List<User> users = userRepository.findAll();
        String message = "";
        for (User user: users) {
            message += user.getMail() + " " + user.getPassword();
        }
        return message;
    }
    
}
