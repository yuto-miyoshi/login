package com.login.backend;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.login.backend.entity.LoginTime;
import com.login.backend.entity.User;
import com.login.backend.model.LoginChallenge;
import com.login.backend.repository.LoginTimeRepository;
import com.login.backend.repository.UserRepository;

@Service
public class LoginRecordService {

    @Autowired
    UserRepository userRepository;
    
    @Autowired
    LoginTimeRepository loginTimeRepository;

    public void record(LoginChallenge form) {
        List<User> users = this.userRepository.userFromMailAndPassword(form.mail, form.password);
        
        if (users.size() < 1) {
            // Nothing to do for forbidden access
            System.out.println("BLOCK INSERT");
            return;
        }

        LoginTime record = new LoginTime();
        record.setLoginTime(LocalDateTime.now());
        record.setUser(users.get(0));

        this.loginTimeRepository.save(record);
    }

}
