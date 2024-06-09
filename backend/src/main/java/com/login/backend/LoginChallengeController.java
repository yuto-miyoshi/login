package com.login.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.login.backend.model.LoginChallenge;
import com.login.backend.model.LoginChallengeResult;

@RestController
public class LoginChallengeController {

    @Autowired
    LoginChallengeService loginChallengeService;

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<LoginChallengeResult> loginChallenge(@RequestBody LoginChallenge challenge) {
        LoginChallengeResult result = this.loginChallengeService.authenticate(challenge);
        return ResponseEntity.ok(result);
    }

}
