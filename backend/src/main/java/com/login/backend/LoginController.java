package com.login.backend;

import org.springframework.web.bind.annotation.RestController;

import com.login.backend.entity.LoginTime;
import com.login.backend.entity.User;
import com.login.backend.repository.LoginTimeRepository;
import com.login.backend.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class LoginController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    LoginTimeRepository loginTimeRepository;

    // データベース接続のテスト
    @GetMapping("/test0")
    public String test0() {
        List<User> users = userRepository.findAll();
        String message = "";
        for (User user: users) {
            message += user.getMail() + " " + user.getPassword();
        }
        return message;
    }

    // データベース接続のテスト
    @GetMapping("/test1")
    public String test1() {
        List<LoginTime> times = loginTimeRepository.findAll();
        String message = "";
        for (LoginTime time: times) {
            message += time.getUser().getMail() + "\n" + time.getLoginTime();
        }
        return message;
    }    
    
}
