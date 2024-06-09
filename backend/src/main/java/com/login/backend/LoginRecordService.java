package com.login.backend;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.login.backend.entity.LoginTime;
import com.login.backend.entity.User;
import com.login.backend.model.LoginChallenge;
import com.login.backend.repository.LoginTimeRepository;

@Service
public class LoginRecordService {
    
    @Autowired
    LoginTimeRepository loginTimeRepository;

    public void record(LoginChallenge form) {
        LoginTime loginTime = new LoginTime();
        User user = new User();

        user.setMail(form.mail);
        user.setPassword(form.password);

        loginTime.setLoginTime(LocalDateTime.now());
        loginTime.setUser(user);

        this.loginTimeRepository.save(loginTime);
    }

}
