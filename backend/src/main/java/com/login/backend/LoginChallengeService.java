package com.login.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.login.backend.model.LoginChallenge;
import com.login.backend.model.LoginChallengeResult;
import com.login.backend.repository.UserRepository;

import com.login.backend.entity.User;

@Service
public class LoginChallengeService {
    
    @Autowired
    UserRepository userRepository;

    public LoginChallengeResult authenticate(LoginChallenge form) {
        List<User> users = this.userRepository.userFromMailAndPassword(form.mail, form.password);
        LoginChallengeResult result = new LoginChallengeResult();
        result.success = users.size() > 0 ? true : false;
        return result;
    }
    
}
